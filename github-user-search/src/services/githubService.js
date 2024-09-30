const fetchUserData = async (username, location, minRepos, page) => {
    const query = [];
    if (username) query.push(`login:${username}`);
    if (location) query.push(`location:${location}`);
    if (minRepos) query.push(`repos:>${minRepos}`);
  
    const url = `https://api.github.com/search/users?q=${query.join('+')}&page=${page}&per_page=10`;
    const response = await axios.get(url);
    return response.data;
  };
  
  export { fetchUserData };