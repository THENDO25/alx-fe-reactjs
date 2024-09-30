import React, { useState, useEffect } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [repoCount, setRepoCount] = useState('');
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setIsError(false);

    try {
      const data = await fetchUserData(username, location, repoCount);
      setUserData(data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Search by username"
          className="p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Search by location"
          className="p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="number"
          value={repoCount}
          onChange={(event) => setRepoCount(event.target.value)}
          placeholder="Minimum repositories"
          className="p-2 border border-gray-300 rounded-lg"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Search
        </button>
      </form>

      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error occurred while searching.</div>
      ) : userData.length === 0 && (username || location || repoCount) ? (
        <div className="text-center text-red-500 font-bold mt-4">
          Looks like we can't find the user.
        </div>
      ) : (
        <div className="mt-4">
          <h2>Search Results:</h2>
          <ul>
            {userData.map((user) => (
              <li key={user.id} className="mb-4">
                <img src={user.avatar_url} alt={user.login} className="w-10 h-10 rounded-full" />
                <div>
                  <h3>
                    <a href={user.html_url} target="_blank" rel="noreferrer">
                      {user.login}
                    </a>
                  </h3>
                  <p>Location: {user.location}</p>
                  <p>Repositories: {user.public_repos}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;