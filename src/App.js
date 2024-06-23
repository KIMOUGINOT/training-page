import React, { useState} from 'react';
import './App.css';
import Programs from './pages/Programs'
import Home from './pages/Home'
import Stopwatch from './pages/Stopwatch'
import Timer from './pages/Timer'

function App() {
  const [page, setPage] = useState('home') ;

  const renderPage = () => {
    switch(page) {
        case 'home':
            return <Home />;
        case 'programs':
            return <Programs />;
        case 'stopwatch':
            return <Stopwatch />;
        case 'timer':
            return <Timer />;
        default:
          return <Home/>;
    }
  };

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

