import React, { useState, useEffect } from 'react';
import { fetchUserData } from '../services/githubService';

const UserProfile = ({ username }) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await fetchUserData(username);
        setUserData(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchUser();
  }, [username]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{userData.name}</h1>
      <p>Username: {userData.login}</p>
      <p>Location: {userData.location}</p>
      {/* Display more user data as needed */}
    </div>
  );
};

export default UserProfile;