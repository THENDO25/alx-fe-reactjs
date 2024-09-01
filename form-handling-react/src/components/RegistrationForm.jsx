import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Email is required' }));
    } else if (!password) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Password is required' }));
    } else {
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;