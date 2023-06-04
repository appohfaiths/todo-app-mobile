import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import EditTodo from '../editTodo';
import {useTodos} from '../../hooks/useTodoState';

jest.mock('../../hooks/useTodoState');

test('edit a todo', () => {
  const setIsEditingMock = jest.fn();
  const editTodoMock = jest.fn();
  useTodos.mockReturnValue({
    editTodo: editTodoMock,
  });

  render(
    <EditTodo
      editTodo={editTodoMock}
      id={1}
      text="origiinal todo text"
      setIsEditing={setIsEditingMock}
    />,
  );

  const input = screen.getByTestId('editTodoInput');
  const editedTodoText = 'edited todo text';

  fireEvent.changeText(input, editedTodoText);
  fireEvent(input, 'blur');

  expect(editTodoMock).toHaveBeenCalledTimes(1);
  expect(editTodoMock).toHaveBeenCalledWith(1, editedTodoText);
});
