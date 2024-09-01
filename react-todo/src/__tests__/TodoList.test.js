import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoList from '../../TodoList';

test('renders correctly', () => {
  render(<TodoList />);
  expect(screen.getByText('Todo List')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(2);
});

test('adds new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText('Add new todo');
  const button = screen.getByText('Add');
  fireEvent.change(input, { target: { value: 'New todo' } });
  fireEvent.click(button);
  expect(screen.getAllByRole('listitem')).toHaveLength(3);
});

test('toggles todo completion', () => {
  render(<TodoList />);
  const checkbox = screen.getAllByRole('checkbox')[0];
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
});

test('deletes todo', () => {
  render(<TodoList />);
  const button = screen.getAllByText('Delete')[0];
  fireEvent.click(button);
  expect(screen.getAllByRole('listitem')).toHaveLength(1);
});