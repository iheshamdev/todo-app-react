import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan, apiCallFailed } from './middleware/api';
import { TODOS_API_URL } from '../constants';

const slice = createSlice({
  name: 'todos',
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    // actions => action handlers
    todosRequested: (todos, action) => {
      todos.loading = true;
    },
    todosReceived: (todos, action) => {
      todos.list = action.payload;
      todos.loading = false;
    },
    todoAdded: (todos, action) => {
      todos.list.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      });
      todos.loading = false;
    },
    todoUpdated: (todos, action) => {
      const index = todos.list.findIndex(todo => todo.id === action.payload.id);
      todos.list[index] = { ...todos.list[index], ...action.payload };
      todos.loading = false;
    },
    todoRemoved: (todos, action) => {
      const index = todos.list.findIndex(todo => todo.id == action.payload.id);
      todos.list.splice(index, 1);
      todos.loading = false;
    },
  },
});
export const {
  todosRequested,
  todosReceived,
  todoAdded,
  todoUpdated,
  todoRemoved,
  todoCompleted,
} = slice.actions;
export default slice.reducer;

// Action creators
export const LOAD_TODOS = () =>
  apiCallBegan({
    url: TODOS_API_URL,
    onStart: todosRequested.type,
    onSuccess: todosReceived.type,
    onError: apiCallFailed.type,
  });

export const ADD_BUG = text =>
  apiCallBegan({
    url: TODOS_API_URL,
    method: 'post',
    data: { text, completed: false },
    onStart: todosRequested.type,
    onSuccess: todoAdded.type,
    onError: apiCallFailed.type,
  });

export const REMOVE_TODO = id =>
  apiCallBegan({
    url: TODOS_API_URL + `/${id}`,
    method: 'delete',
    onStart: todosRequested.type,
    onSuccess: todoRemoved.type,
    onError: apiCallFailed.type,
  });

export const UPDATE_TODO = updatedData =>
  apiCallBegan({
    url: TODOS_API_URL + `/${updatedData.id}`,
    method: 'patch',
    data: updatedData,
    onStart: todosRequested.type,
    onSuccess: todoUpdated.type,
    onError: apiCallFailed.type,
  });
