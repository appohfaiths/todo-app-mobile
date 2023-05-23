import React from 'react';
import {View, StyleSheet} from 'react-native';
import AddTodo from '../components/addTodo';
import TodoDisplay from '../components/todoDisplay';
import {useTodos} from '../hooks/useTodoState';

export default function TodoList() {
  const {todos, addTodo, deleteTodo, toggleTodo} = useTodos();

  return (
    <View style={styles.container}>
      <View style={styles.todoDisplayContainer}>
        <TodoDisplay
          todos={todos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          testID="todoDisplay"
        />
      </View>
      <View style={styles.addtodoContainer}>
        <AddTodo addTodo={addTodo} testID="addTodoComponent" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  todoDisplayContainer: {
    flex: 0.9,
  },
  addtodoContainer: {
    flex: 0.1,
    padding: 5,
  },
});
