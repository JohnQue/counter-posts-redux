import React from 'react';

function Todo({ todo, onToggle }) {
  const { id, text, done } = todo;
  return (
    <div>
      <span>{id}</span>
      <b
        style={{
          textDecoration: done ? 'line-through' : 'none',
        }}
        onClick={() => onToggle(id)}
      >
        {text}
      </b>
    </div>
  );
}

export default Todo;
