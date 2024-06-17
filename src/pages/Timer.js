import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [inputMinute, setInputMinute] = useState(0);
    const [inputSecond, setInputSecond] = useState(0);

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        if (seconds == 0) {setIsActive(false);}

        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const handleInputMinuteChange = (event) => {
        setInputMinute(event.target.value);
    };
    const handleInputSecondChange = (event) => {
        setInputSecond(event.target.value);
    };

    const handleStart = () => {
        const sec = parseInt(inputMinute)*60 + parseInt(inputSecond);
        setSeconds(sec);
        setIsActive(true);
    };

    const handleStop = () => {
        setIsActive(false);
    };

    const handleReset = () => {
        setIsActive(false);
        setSeconds(0);
    };

    const formatTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };
    return (
        <>
            <div className='time-container'>
                <div className='timer-input-container'>
                    <input className='timer-input' type='number' value={inputMinute} onChange={handleInputMinuteChange} ></input>
                    <input className='timer-input' type='number' value={inputSecond} onChange={handleInputSecondChange}></input>
                </div>
                <p className="timer">{formatTime(seconds)}</p>
            </div>
            <div className='timer-button-container'>
                <button className='timer-button' onClick={handleStart}>Start</button>
                <button className='timer-button' onClick={handleStop}>Stop</button>
                <button className='timer-button' onClick={handleReset}>Reset</button>
            </div>
        </>
    );
};

export default Timer ;