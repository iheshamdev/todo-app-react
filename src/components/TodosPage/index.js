import React from 'react';
import './style.scss';
import { useSelector } from 'react-redux';
import AddTodo from '../AddTodo';
import TodoItem from '../TodoItem';

const TodosPage = () => {
  const todos = useSelector(state => state.todos);
  return (
    <section className="todos_container">
      <AddTodo />
      {todos.length > 0 ? (
        <ul>
          {todos.map(todo => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </ul>
      ) : (
        <p>You didn't add todos yet</p>
      )}
    </section>
  );
};

export default TodosPage;
