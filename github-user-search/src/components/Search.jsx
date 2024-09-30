import React, { useState, useEffect } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setIsError(false);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Search for a GitHub user"
        />
        <button type="submit">Search</button>
      </form>

      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Looks like we can't find the user.</div>
      ) : userData ? (
        <div className="user-profile">
          <img src={userData.avatar_url} alt={userData.login} />
          <h2>{userData.name}</h2>
          <p>Username: {userData.login}</p>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            View GitHub Profile
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default Search;