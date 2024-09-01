import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';
import BlogPost from './BlogPost';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
        <Route path="/blog/:postId" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;