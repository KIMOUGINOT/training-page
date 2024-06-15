import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { saveToLocalStorage, loadFromLocalStorage } from './localStorage';
import './App.css';
import Programs from './Programs'

function App() {
  const [routines, setRoutines] = useState(() => loadFromLocalStorage('routines') || [
    { title: "Morning Routine", data: [{ name: "jump rope", duration: "5 min  " }, { name: "push up", duration: "60" },{ name: "sit up", duration: "45" }, { name: "squat", duration: "50" }] },
    { title: "Evening Routine", data: [{ name: "sit up", duration: "45" }, { name: "squat", duration: "50" },{ name: "sit up", duration: "45" }, { name: "squat", duration: "50" }] },
    { title: "Noon Routine", data: [{ name: "plank", duration: "60" }, { name: "burpees", duration: "30" }] },
    { title: "Afternoon Routine", data: [{ name: "lunges", duration: "40" }, { name: "mountain climbers", duration: "50" }, { name: "bicep curls", duration: "35" }, { name: "tricep dips", duration: "45" }] },
    { title: "Night Routine", data: [{ name: "bicep curls", duration: "35" }, { name: "tricep dips", duration: "45" }] },
    { title: "Workout Routine", data: [{ name: "running", duration: "20" }, { name: "cycling", duration: "60" }] }
  ]);

  useEffect(() => {
    saveToLocalStorage('routines', routines);
  }, [routines]);

  return (
    <div className="App">
      <div className='header'>
        <img src={process.env.PUBLIC_URL + '/kitraining.png'} alt="kitraining" className="header-title"/>
        <div className='header-selector'>
          <p className='page'>Programs</p>
          <p className='page'>Timer</p>
          <p className='page'>Alarm</p>
        </div>
      </div>
      <div className="main">
        <Programs routines={routines}/>
      </div>
    </div>
  );
}

export default App;

