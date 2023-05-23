import 'react-native';
import React from 'react';
import AddTodo from '../addTodo';
import {useTodos} from '../../hooks/useTodoState';
import {render, screen, fireEvent} from '@testing-library/react-native';

jest.mock('../../hooks/useTodoState');

test('add a todo', () => {
  const addTodoMock = jest.fn();
  const saveTodoToDeviceMock = jest.fn();
  useTodos.mockReturnValue({
    addTodo: addTodoMock,
    saveTodoToDevice: saveTodoToDeviceMock,
  });

  render(<AddTodo addTodo={addTodoMock} />);

  const input = screen.getByTestId('todoInput');
  const addtodoButton = screen.getByTestId('addtodoButton');
  const newTodoText = 'testing the input';

  fireEvent.changeText(input, newTodoText);
  expect(input.props.value).toBe(newTodoText);

  fireEvent.press(addtodoButton);
  expect(addTodoMock).toHaveBeenCalledWith(newTodoText);
  expect(input.props.value).toBe('');
});
