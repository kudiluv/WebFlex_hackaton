import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import lecturesReducer from './reducers/lecturesReducer';
import ThunkMiddleware from 'redux-thunk';
import menuReducer from './reducers/menuReducer';
import searchReducer from './reducers/searchReducer';

const composedEnhancer = applyMiddleware(ThunkMiddleware);

export const store = configureStore({
  reducer: {authReducer,lecturesReducer,menuReducer,searchReducer},
  composedEnhancer,
})