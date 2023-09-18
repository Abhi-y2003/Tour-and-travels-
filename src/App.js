import Tours from './components/Tours';
import './App.css';
import data from './data'
import React, { useState } from 'react';

function App() {

  const [tours, setTours] = useState(data)
  return (
    <div>
    <h2>Plan with Abhishek</h2>
    <Tours tours={tours}></Tours>
    </div>
  );
}

export default App;
