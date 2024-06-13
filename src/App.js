import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { saveToLocalStorage, loadFromLocalStorage } from './localStorage';
import './App.css';
import Routine from './Routine';
import Exo from './Exo';

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

  const data = [
    { name: "jump rope", duration: "30 sec" },
    { name: "push up", duration: "60 sec" },
    { name:"sit up", duration:"60 sec"},
    { name:"pull up", duration:"AMRAP"}
  ];

  return (
    <div className="App">
      <div className='header'>
        <img src={process.env.PUBLIC_URL + '/kitraining.png'} alt="kitraining" className="header-title"/>
        <h1 className='title'>Training App</h1>
      </div>
      <div className="main">
                {routines.map((routine, index) => (
                    <Routine
                        key={index}
                        title={routine.title}
                        data={routine.data}
                    />
                ))}
            </div>
    </div>
  );
}

export default App;

