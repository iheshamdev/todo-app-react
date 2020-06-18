import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;
const slice = createSlice({
  name: 'bugs',
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        text: action.payload.text,
        resolved: false,
      });
    },
  },
});

export const { bugAdded } = slice.actions;
export default slice.reducer;
