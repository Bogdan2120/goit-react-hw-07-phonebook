import { configureStore } from '@reduxjs/toolkit';
import rootReducet from './root-redcer';

export const store = configureStore({
  reducer: rootReducet,
});
