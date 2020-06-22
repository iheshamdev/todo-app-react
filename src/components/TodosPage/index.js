import React, { useEffect } from 'react';
import './style.scss';
import { connect, useDispatch } from 'react-redux';
import AddTodo from '../AddTodo';
import TodoItem from '../TodoItem';
import { LOAD_TODOS } from '../../store/todos';

const TodosPage = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LOAD_TODOS());
  }, [dispatch]);

  return (
    <section className="todos_container">
      <AddTodo />
      {props.todos.loading && <span>Loading...</span>}
      {props.todos.list.length > 0 ? (
        <ul>
          {props.todos.list.map(todo => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </ul>
      ) : (
        <p>You didn't add todos yet</p>
      )}
    </section>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos,
  };
};
export default connect(mapStateToProps)(TodosPage);
