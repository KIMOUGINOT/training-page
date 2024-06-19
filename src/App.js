import React, { useState, useEffect } from 'react';
import { saveToLocalStorage, loadFromLocalStorage } from './localStorage';
import './App.css';
import Programs from './pages/Programs'
import Home from './pages/Home'
import Stopwatch from './pages/Stopwatch'
import Timer from './pages/Timer'

function App() {
  const [routines, setRoutines] = useState(() => loadFromLocalStorage('routines') || [
    { title: "Monday", data: [{ name: "Bench", duration: "see prog" }, { name: "Cable  fly", duration: "3x10" },{ name: "Lateral raises", duration: "4x10" }, { name: "Dips", duration: "3x15" }] },
    { title: "Evening Routine", data: [{ name: "sit up", duration: "45" }, { name: "squat", duration: "50" },{ name: "sit up", duration: "45" }, { name: "squat", duration: "50" }] },
    { title: "Noon Routine", data: [{ name: "plank", duration: "60" }, { name: "burpees", duration: "30" }] },
    { title: "Afternoon Routine", data: [{ name: "lunges", duration: "40" }, { name: "mountain climbers", duration: "50" }, { name: "bicep curls", duration: "35" }, { name: "tricep dips", duration: "45" }] },
    { title: "Night Routine", data: [{ name: "bicep curls", duration: "35" }, { name: "tricep dips", duration: "45" }] },
    { title: "Workout Routine", data: [{ name: "running", duration: "20" }, { name: "cycling", duration: "60" }] }
  ]);
  const [page, setPage] = useState('home') ;

  const renderPage = () => {
    switch(page) {
        case 'home':
            return <Home />;
        case 'programs':
            return <Programs routines={routines} />;
        case 'stopwatch':
            return <Stopwatch />;
        case 'timer':
            return <Timer />;
        default:
          return <Home/>;
    }
  };

  useEffect(() => {
    saveToLocalStorage('routines', routines);
  }, [routines]);

  return (
    <div className="App">
      <div className='header'>
        <img 
          src={process.env.PUBLIC_URL + '/logo/white_bg_logo_title.png'} 
          alt="kitraining" 
          className="header-title"
          onClick={() => setPage('home')}
        />
        <div className='header-selector'>
          <p className='page' onClick={() => setPage('programs')}>Programs</p>
          <p className='page' onClick={() => setPage('stopwatch')}>Stopwatch</p>
          <p className='page' onClick={() => setPage('timer')}>Timer</p>
        </div>
      </div>
      {renderPage()}
    </div>
  );
}

export default App;

