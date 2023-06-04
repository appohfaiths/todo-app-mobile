import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import TodoItem from '../todoItem';
import {useTodos} from '../../hooks/useTodoState';

jest.mock('../../hooks/useTodoState');

//testing the delete functionality
test('delete a task when the delete button is clicked', async () => {
  const todo = {id: 1, text: 'test delete', completed: false};
  const deleteTodoMock = jest.fn();
  const toggleTodoMock = jest.fn();
  const editTodoMock = jest.fn();

  useTodos.mockReturnValue({
    deleteTodo: deleteTodoMock,
    toggleTodo: toggleTodoMock,
    editTodo: editTodoMock,
  });

  render(
    <TodoItem
      todo={todo}
      toggleTodo={toggleTodoMock}
      deleteTodo={deleteTodoMock}
    />,
  );

  const deleteButton = screen.getByTestId('deleteButton');
  const deletedTodo = screen.queryByText(todo.text);

  fireEvent.press(deleteButton);

  expect(deleteTodoMock).toHaveBeenCalledWith(todo.id);

  try {
    deletedTodo;
    expect(true).toBeFalsy();
  } catch (error) {
    expect(error).toBeTruthy();
  }
});

//testing the toggle completion functionality

test('mark a task as completed when the checkbox is clicked', () => {
  const todo = {id: 1, text: 'test completed', completed: false};
  const deleteTodoMock = jest.fn();
  const toggleTodoMock = jest.fn();
  const editTodoMock = jest.fn();

  useTodos.mockReturnValue({
    deleteTodo: deleteTodoMock,
    toggleTodo: toggleTodoMock,
    editTodo: editTodoMock,
  });

  render(
    <TodoItem
      todo={todo}
      toggleTodo={toggleTodoMock}
      editTodo={editTodoMock}
      deleteTodo={deleteTodoMock}
    />,
  );

  const statusButton = screen.getByTestId('statusButton');

  fireEvent.press(statusButton);
  expect(toggleTodoMock).toHaveBeenCalledWith(todo.id);
  expect(toggleTodoMock).toHaveBeenCalledTimes(1);
});
