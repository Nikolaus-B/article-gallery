import axios from 'axios';

const ApiKey = '0a1f54de98a94593b203abe9891393f7';
axios.defaults.baseURL = `
 https://newsapi.org/`;

export const fetchArticles = async (page = 1, pageSize = 10) => {
  const response = await axios.get(
    `v2/top-headlines?country=us&apiKey=${ApiKey}&page=${page}&pageSize=${pageSize}`
  );
  return response.data.articles;
};
