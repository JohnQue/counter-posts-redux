import React, { useState } from 'react';
import Todo from './Todo';

function Todos({ todos, onCreate, onToggle }) {
  const [text, setText] = useState('');
  const onSubmit = e => {
    e.preventDefault();
    onCreate(text);
    setText('');
  };

  const onChange = e => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
      </form>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </div>
  );
}

export default Todos;
