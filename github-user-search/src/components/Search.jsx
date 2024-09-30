import React, { useState, useEffect } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  // ... existing code ...

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      {/* ... existing code ... */}

      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error occurred while searching.</div>
      ) : userData.length === 0 && (username || location || repoCount) ? (
        <div className="text-center text-red-500 font-bold mt-4">
          Looks like we can't find the user
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