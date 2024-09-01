import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';

test('initial render', () => {
  render(<TodoList />);
  expect(screen.getByText('Buy milk')).toBeInTheDocument();
  expect(screen.getByText('Walk the dog')).toBeInTheDocument();
});

test('add todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText('Add Todo');
  const submitButton = screen.getByText('Add Todo');
  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(submitButton);
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('toggle todo', () => {
  render(<TodoList />);
  const todo = screen.getByText('Buy milk');
  fireEvent.click(todo);
  expect(todo).toHaveStyle('text-decoration: line-through');
});

test('delete todo', () => {
  render(<TodoList />);
  const todo = screen.getByText('Buy milk');
  const deleteButton = todo.nextSibling;
  fireEvent.click(deleteButton);
  expect(screen.queryByText('Buy milk')).not.toBeInTheDocument();
});