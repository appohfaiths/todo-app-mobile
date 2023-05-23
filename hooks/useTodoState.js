/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

export const useTodoStorage = () => {
  const saveTodoToDevice = async todos => {
    try {
      const stringifyTodos = JSON.stringify(todos);
      await AsyncStorage.setItem('todos', stringifyTodos);
    } catch (e) {
      throw new Error('Failed to save todos to device');
    }
  };

  const getTodosFromDevice = async () => {
    try {
      const todos = await AsyncStorage.getItem('todos');
      return todos != null ? JSON.parse(todos) : [];
    } catch (e) {
      throw new Error('Failed to get todos from device');
    }
  };

  return {saveTodoToDevice, getTodosFromDevice};
};

export const useTodoState = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = newTodoText => {
    setTodos(prevTodos => [
      ...prevTodos,
      {id: uuid.v4(), text: newTodoText, completed: false},
    ]);
  };

  const deleteTodo = todoIdToDelete => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoIdToDelete));
  };

  const toggleTodo = todoIdToToggle => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === todoIdToToggle
          ? {...todo, completed: !todo.completed}
          : todo,
      ),
    );
  };

  const editTodo = (todoIdToEdit, newTodoText) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === todoIdToEdit ? {...todo, text: newTodoText} : todo,
      ),
    );
  };

  return {todos, setTodos, addTodo, deleteTodo, toggleTodo, editTodo};
};

export const useTodos = () => {
  const {todos, setTodos, addTodo, deleteTodo, toggleTodo, editTodo} =
    useTodoState();
  const {saveTodoToDevice, getTodosFromDevice} = useTodoStorage();

  useEffect(() => {
    getTodosFromDevice().then(loadedTodos => {
      if (loadedTodos !== null) {
        setTodos(loadedTodos);
      }
    });
  }, []);

  useEffect(() => {
    saveTodoToDevice(todos);
  }, [todos]);

  return {todos, addTodo, deleteTodo, toggleTodo, editTodo};
};
