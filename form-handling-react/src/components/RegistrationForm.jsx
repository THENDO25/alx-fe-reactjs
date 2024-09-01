import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username) {
      setErrors((prevErrors) => ({ ...prevErrors, username: 'Username is required' }));
    } else if (!email) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Email is required' }));
    } else if (!password) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Password is required' }));
    } else {
      // Form submission logic here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Username"
      />
      {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}

      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
      />
      {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}

      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
      />
      {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;