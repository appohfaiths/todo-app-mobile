import React from 'react';
import {render, screen} from '@testing-library/react-native';
import TodoDisplay from '../todoDisplay';

const todos = [
  {id: 1, title: 'Todo 1', completed: false},
  {id: 2, title: 'Todo 2', completed: true},
];

test('renders the todo list correctly', () => {
  const {getByTestId} = render(<TodoDisplay todos={todos} />);
  const todoFlatList = getByTestId('todoFlatList');
  expect(todoFlatList).toBeDefined();

  todos.forEach(todo => {
    const todoItem = screen.getByTestId(`todoItem-${todo.id}`);
    expect(todoItem).toBeTruthy();
  });
});
