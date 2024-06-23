import React, { useState, useEffect } from 'react';
import { saveToLocalStorage, loadFromLocalStorage } from '../localStorage'
import Routine from '../components/Routine';

const Programs = () => {
    const [routines, setRoutines] = useState(() => loadFromLocalStorage('routines') || [
        { title: "Monday", data: [{ name: "Bench", duration: "see prog" }, { name: "Cable  fly", duration: "3x10" },{ name: "Lateral raises", duration: "4x10" }, { name: "Dips", duration: "3x15" }] },
        { title: "Evening Routine", data: [{ name: "sit up", duration: "45" }, { name: "squat", duration: "50" },{ name: "sit up", duration: "45" }, { name: "squat", duration: "50" }] },
        { title: "Noon Routine", data: [{ name: "plank", duration: "60" }, { name: "burpees", duration: "30" }] },
        { title: "Afternoon Routine", data: [{ name: "lunges", duration: "40" }, { name: "mountain climbers", duration: "50" }, { name: "bicep curls", duration: "35" }, { name: "tricep dips", duration: "45" }] },
        { title: "Night Routine", data: [{ name: "bicep curls", duration: "35" }, { name: "tricep dips", duration: "45" }] },
        { title: "Workout Routine", data: [{ name: "running", duration: "20" }, { name: "cycling", duration: "60" }] }
      ]);

    useEffect(() => {
        saveToLocalStorage('routines', routines);
    }, [routines]);

    const handleRemove = (title) => {
        const updatedRoutines = routines.filter(routine => routine.title !== title);
        setRoutines(updatedRoutines);
      };
    
    return (
        <div className='program-page-container'>
            <div className='add-training-button' onClick={() => {}}>
                Add a training
                <img src={process.env.PUBLIC_URL + '/icons/add.png'} alt="add icon" className="icon"/>
            </div>
            <div className="programs-container">
                {routines.map((routine, index) => (
                    <Routine
                        key={index}
                        title={routine.title}
                        data={routine.data}
                        handleRemove={handleRemove}
                    />
                ))}
            </div>
        </div>
    );
} 
export default Programs;