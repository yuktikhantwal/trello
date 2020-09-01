import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'

function App() {
  return (
    <div className="App">
      <span id="heading">Trello </span>
      <img src={require("./todo.png")} height="40px"></img>
      <br/>
      <div className="board">
        <List title="To Do"/>
        <List title="Doing"/>
        <List title="Completed"/> 
      </div>
    </div>
  );
}

export default App;
