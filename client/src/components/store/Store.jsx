import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import ThunkMiddleware from 'redux-thunk';

const composedEnhancer = applyMiddleware(ThunkMiddleware);

export const store = configureStore({
  reducer: {authReducer},
  composedEnhancer,
})