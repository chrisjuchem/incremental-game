import React, {useEffect, useState} from 'react';
import './App.css';
import ResourceCount from './ResourceCount'

function App() {
  let [r, setR] = useState(null)
  useEffect(() => {
    setTimeout(() => {
      setR(<ResourceCount/>)
    }, 5000)
    setTimeout(() => {
      setR(<><ResourceCount/><ResourceCount/></>)
    }, 10000)
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <ResourceCount/>
        {r}
      </header>
    </div>
  );
}

export default App;
