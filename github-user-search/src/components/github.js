import axios from 'axios';

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_API_KEY}`,
  },
});

export const searchUsers = async (query) => {
  const response = await githubApi.get(`/search/users?q=${query}`);
  return response.data;
};