import { configureStore } from '@reduxjs/toolkit';
import heroesReducer from './slice';

export default configureStore({
  reducer: {
    heroes: heroesReducer,
  },
});
