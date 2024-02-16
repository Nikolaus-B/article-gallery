import { createSlice } from '@reduxjs/toolkit';
import { fetchArticles } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    articlesToLoad: 10,
    total: 0,
    page: 1,
    filter: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    morePage: (state, action) => {
      state.page += 1;
      state.articlesToLoad = action.payload;
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchArticles.pending, handlePending)
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.total = action.payload.totalResults;
        state.articles = [...state.articles, ...action.payload.articles];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchArticles.rejected, handleRejected);
  },
});

export const { morePage, changeFilter } = articlesSlice.actions;
export const articlesReducer = articlesSlice.reducer;
