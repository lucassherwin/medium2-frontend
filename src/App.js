import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/login.js';
import Signup from './Components/SignUp.js';

function App() {
  return (
    <div className="App">
      <Login />
      <Signup/>
    </div>
  );
}

export default App;
