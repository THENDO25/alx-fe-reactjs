import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
  return (
    <Routes>
      <Route path="/" element={<ProfileDetails />} />
      <Route path="/settings" element={<ProfileSettings />} />
    </Routes>
  );
};

export default Profile;