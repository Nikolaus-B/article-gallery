import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ApiKey = 'a803bade5cf3445582517dceab3630f7';
axios.defaults.baseURL = `
 https://newsapi.org/`;

export const fetchArticles = createAsyncThunk(
  'articles/fetchAll',
  async ({ page, articlesToLoad }, thunkAPI) => {
    try {
      const response = await axios.get(
        `v2/top-headlines?country=us&apiKey=${ApiKey}&page=${page}&pageSize=${articlesToLoad}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
