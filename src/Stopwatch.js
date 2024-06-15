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
        setLapNumber(prevLapNumber => prevLapNumber + 1);
        setLaps([...laps, { lap: lapNumber + 1, time: formatTime(seconds) }]);
    };

    const formatTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <div>
            <h1>Stopwatch</h1>
            <p className="timer">{formatTime(seconds)}</p>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleAddLap}>Add Lap</button>
            <div id="container">
                {laps.map((lap, index) => (
                    <h3 key={index}>{`Lap ${lap.lap}: ${lap.time}`}</h3>
                ))}
            </div>
        </div>
    );
};

export default Stopwatch;
