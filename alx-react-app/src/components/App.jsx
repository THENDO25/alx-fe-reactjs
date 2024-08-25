import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './WelcomeMessage'
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './UserProfile';

function App() {
  const [count, setCount] = useState(0)

  console.log('Rendering App component');

  return (
    <>
  
      <WelcomeMessage />
     
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
      </p>
        <Header />
       <MainContent/>
      <Footer/>
      <UserProfile name="Alice" age="25" bio="I do Hard things,Loves gaming and reading" />
      
    </>
  )
}

export default App
