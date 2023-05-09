import './App.css';
import Semain from './components/Semain';
import Main from './components/main';
import { useState } from 'react';


function App() {
let [loginStatus,SetStatus]=useState(false)





  return (
    <div className="App">
      {
        loginStatus?<Main/>:<Semain/>
      }
     
    
    </div>
  );
}

export default App;
