import axios from 'axios';

const githubApi = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Fetch user data from GitHub API
 * 
 * @param {string} username - GitHub username to search for
 * @returns {Promise} - Promise resolving to user data
 */
const fetchUserData = async (username) => {
  try {
    const response = await githubApi.get(`users/${username}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export { fetchUserData };