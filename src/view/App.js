import React from 'react';
import './App.css';
import ResourceCount from './ResourceCount'
import {addResource} from '../engine/resources'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResourceCount resource='a'/>
        <ResourceCount resource='b'/>
        <ResourceCount resource='c'/>
        <button onClick={() => addResource('b', 1)}>Add a 'B'</button>
      </header>
    </div>
  );
}

export default App;
