import './style.scss';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoUpdated, UPDATE_TODO, REMOVE_TODO } from '../../store/todos';

// todoCompleted,
// ,
const TodoItem = props => {
  const { todo } = props;
  const [todoText, setTodoText] = useState(todo.text);
  const dispatch = useDispatch();

  return (
    <li key={todo.id} className="todoItem">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() =>
          dispatch(UPDATE_TODO({ id: todo.id, completed: !todo.completed }))
        }
      />
      <input
        type="text"
        className={todo.completed ? 'completed' : ''}
        value={todoText}
        onChange={e => setTodoText(e.target.value)}
        onBlur={() =>
          todo.text !== todoText
            ? dispatch(UPDATE_TODO({ id: todo.id, text: todoText }))
            : ''
        }
      />
      <div
        className="delete_icon"
        onClick={() => dispatch(REMOVE_TODO(todo.id))}
      >
        Remove
      </div>
    </li>
  );
};

export default TodoItem;
