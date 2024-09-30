import axios from 'axios';

const githubApi = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const fetchUserData = async (username, location, repoCount, page = 1) => {
    const query = [];
    if (username) query.push(`login:${username}`);
    if (location) query.push(`location:${location}`);
    if (repoCount) query.push(`repos:>${repoCount}`);
  
    const response = await githubApi.get(`search/users?q=${query.join('+')}&page=${page}&per_page=10`);
    return response.data;
  };
export { fetchUserData };