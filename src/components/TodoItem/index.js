import './style.scss';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoUpdated, todoRemoved, todoCompleted } from '../../store/todos';

const TodoItem = props => {
  const { todo } = props;
  const [todoText, setTodoText] = useState(todo.text);
  const dispatch = useDispatch();
  return (
    <li key={todo.id} className="todoItem">
      <input
        type="checkbox"
        checked={todo.completed}
        onClick={() => dispatch(todoCompleted({ id: todo.id }))}
      />
      <input
        type="text"
        className={todo.completed ? 'completed' : ''}
        value={todoText}
        onChange={e => setTodoText(e.target.value)}
        onBlur={() => dispatch(todoUpdated({ id: todo.id, text: todoText }))}
      />
      <div
        className="delete_icon"
        onClick={() => dispatch(todoRemoved({ id: todo.id }))}
      >
        Remove
      </div>
    </li>
  );
};

export default TodoItem;
