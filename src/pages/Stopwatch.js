import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [laps, setLaps] = useState([]);
    const [lapNumber, setLapNumber] = useState(0);

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const handleStart = () => {
        setIsActive(true);
    };

    const handleStop = () => {
        setIsActive(false);
    };

    const handleReset = () => {
        setIsActive(false);
        setSeconds(0);
        setLaps([]);
        setLapNumber(0);
    };

    const handleAddLap = () => {
        if (lapNumber < 12) {
            setLapNumber(prevLapNumber => prevLapNumber + 1);
            setLaps([...laps, { lap: lapNumber + 1, time: formatTime(seconds) }]);}
    };

    const formatTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <div className='stopwatch-container'>
            <div className='interface-container'>
                <h1 className="timer">{formatTime(seconds)}</h1>
                <div className='stopwatch-button-container'>
                    <img src={process.env.PUBLIC_URL + '/icons/resume.png'} alt="resume icon" className="stopwatch-icon" onClick={handleStart}/>
                    <img src={process.env.PUBLIC_URL + '/icons/stop.png'} alt="stop icon" className="stopwatch-icon" onClick={handleStop}/>
                    <img src={process.env.PUBLIC_URL + '/icons/reset.png'} alt="reset icon" className="stopwatch-icon" onClick={handleReset}/>
                    <button className='stopwatch-button' onClick={handleAddLap}>Add Lap</button>
                </div>
            </div>
            <div className='lap-container'>
                {laps.map((lap, index) => (
                    <h3 className='lap' key={index}>{`Lap ${lap.lap}: ${lap.time}`}</h3>
                ))}
            </div>
        </div>
    );
};

export default Stopwatch;
