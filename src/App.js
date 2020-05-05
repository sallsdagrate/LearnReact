import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AnyName, { Hi, Btn } from "./components/Welcome"
import Navbar from "./components/Navbar"
import ControlPanel from './components/ControlPanel';
import {  Button } from "@material-ui/core"
import C, { F } from "./components/oldStyleComponents/ClassComponent"

const App = () => {

  const [name, setName] = useState('Harry')
  const legallyChangeName = () => {
    const names = ['Sarai', 'Sumith', 'Aaryan', 'Sam']
    var index = Math.round(Math.random()*names.length)
    setName(names[index])
  }

  return (
    <div className="App">
        <Navbar />
        Learn React with the gang
        <ControlPanel controls={['subscribe', 'shear sheeep']} name={name} />
        <Button onClick={legallyChangeName} >Change name</Button>

        <F />
        <C />
    </div>
  );
}

export default App;
