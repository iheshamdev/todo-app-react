import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './style.scss';
import { todoAdded } from '../../store/todos';

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    dispatch(todoAdded({ text: newTodo }));
    setNewTodo('');
  };

  return (
    <form className="addTodo" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="What do u wanna do"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
      />
      <button
        type="submit"
        className="btn submitBtn"
        disabled={newTodo.trim() === ''}
      >
        ADD
      </button>
    </form>
  );
};

export default AddTodo;
