import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';
import api from './middleware/api';

// export default function () {
//   return configureStore({ reducer });
// }

// export const store = configuerStore();

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), api],
});
export default store;
