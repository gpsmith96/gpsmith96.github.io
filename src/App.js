import './App.css';
import React from 'react';
import Nav from './Nav';
import MainPage from './MainPage';

function App() {
  return (
    <div className="container" id="App">
      <Nav/>
      <MainPage/>
    </div>
  );
}

export default App;