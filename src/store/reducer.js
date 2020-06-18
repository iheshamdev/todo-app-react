import { combineReducers } from 'redux';
import todosReducer from './todos';
import bugsReducer from './bugs';

export default combineReducers({
  todos: todosReducer,
  bugs: bugsReducer,
});
