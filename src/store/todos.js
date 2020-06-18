import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;
const slice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    // actions => action handlers
    todoAdded: (todos, action) => {
      todos.push({
        id: ++lastId,
        text: action.payload.text,
        completed: false,
      });
    },
    todoUpdated: (todos, action) => {
      todos.map(todo => {
        if (todo.id === action.payload.id) todo.text = action.payload.text;
      });
    },
    todoCompleted: (todos, action) => {
      todos.map(todo => {
        if (todo.id === action.payload.id) todo.completed = !todo.completed;
      });
    },
    todoRemoved: (todos, action) => {
      const index = todos.findIndex(todo => todo.id === action.payload.id);
      todos.splice(index, 1);
      // todos.filter(todo => todo.id == action.payload.id); => didn't work
    },
  },
});

export const {
  todoAdded,
  todoUpdated,
  todoRemoved,
  todoCompleted,
} = slice.actions;
export default slice.reducer;
