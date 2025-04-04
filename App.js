import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import './styles.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
    </div>
  );
}



export default App;