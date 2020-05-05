import React from 'react';
import logo from './logo.svg';
import './App.css';
import AnyName, { Hi, Btn } from "./components/Welcome"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="App">
        <Navbar />
        Learn React with the gang
        <AnyName />
        <Hi />
        <Btn />
    </div>
  );
}

export default App;
