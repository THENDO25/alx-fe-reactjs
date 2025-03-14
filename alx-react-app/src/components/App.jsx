
import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import UserProfile from './UserProfile';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
      <WelcomeMessage />
      <UserProfile />

      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>
    </div>
    </div>
  );
}

export default App;
