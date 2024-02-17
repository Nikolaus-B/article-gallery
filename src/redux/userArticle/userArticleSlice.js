import { createSlice } from '@reduxjs/toolkit';

const userArticlesSlice = createSlice({
  name: 'userArticles',
  initialState: {
    userArticles: [],
    pinedArticle: {},
  },
  reducers: {
    addArticle: (state, action) => {
      state.userArticles.push(action.payload);
    },
    pinArticle: (state, action) => {
      state.pinedArticle = { ...action.payload };
    },
    deleteArticle: (state, action) => {
      state.userArticles = state.userArticles.filter(
        item => item.id !== action.payload
      );
    },
    deletePinnedArticle: (state, action) => {
      state.pinedArticle = {};
      state.userArticles = state.userArticles.filter(
        item => item.id !== action.payload
      );
    },
  },
});

export const { addArticle, deleteArticle, pinArticle, deletePinnedArticle } =
  userArticlesSlice.actions;
export const userArticlesReducer = userArticlesSlice.reducer;
