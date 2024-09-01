import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy milk', completed: false },
    { id: 2, text: 'Walk the dog', completed: false },
  ]);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button onClick={() => setTodos(todos.map((t) => (t.id === todo.id ? { ...t, completed: !t.completed } : t)))}>
            Toggle
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;