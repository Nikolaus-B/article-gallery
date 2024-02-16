import { configureStore } from '@reduxjs/toolkit';
import { articlesReducer } from './acrticles/articlesSlice';
import { modalReducer } from './modal/modalSlice';

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    modal: modalReducer,
  },
});
