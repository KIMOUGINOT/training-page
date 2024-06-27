import React, { useState, useEffect } from 'react';
import { saveToLocalStorage, loadFromLocalStorage } from '../localStorage'
import Routine from '../components/Routine';
import RoutineForm from '../components/RoutineForm';

const Programs = () => {
    const [routines, setRoutines] = useState(() => loadFromLocalStorage('routines') || [
        { title: "Monday", data: [{ name: "Bench", duration: "see prog" }, { name: "Cable  fly", duration: "3x10" },{ name: "Lateral raises", duration: "4x10" }, { name: "Dips", duration: "3x15" }] },
        { title: "Evening Routine", data: [{ name: "sit up", duration: "45" }, { name: "squat", duration: "50" },{ name: "sit up", duration: "45" }, { name: "squat", duration: "50" }] },
        { title: "Noon Routine", data: [{ name: "plank", duration: "60" }, { name: "burpees", duration: "30" }] },
        { title: "Afternoon Routine", data: [{ name: "lunges", duration: "40" }, { name: "mountain climbers", duration: "50" }, { name: "bicep curls", duration: "35" }, { name: "tricep dips", duration: "45" }] },
        { title: "Night Routine", data: [{ name: "bicep curls", duration: "35" }, { name: "tricep dips", duration: "45" }] },
        { title: "Workout Routine", data: [{ name: "running", duration: "20" }, { name: "cycling", duration: "60" }] }
      ]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        saveToLocalStorage('routines', routines);
    }, [routines]);

    const handleRemove = (title) => {
        const updatedRoutines = routines.filter(routine => routine.title !== title);
        setRoutines(updatedRoutines);
    };
    
    const handleAdd = (newRoutine) => {
        setRoutines(prevRoutines => {
            const routineExists = prevRoutines.find(routine => routine.title === newRoutine.title);
            
            if (routineExists) {
                const updatedRoutines = prevRoutines.map(routine => 
                    routine.title === newRoutine.title
                        ? { ...routine, data: [...routine.data, ...newRoutine.data] }
                        : routine
                );
                return updatedRoutines;
            } else {
                return [...prevRoutines, newRoutine];
            }
        });
        setIsModalOpen(false);
    };
    
    return (
        <div className={`program-page-container ${isModalOpen ? '.modal-open' : ''}`}>
            <div className='add-training-button' onClick={() => setIsModalOpen(true)}>
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
            {isModalOpen && <RoutineForm onAdd={handleAdd} onClose={() => setIsModalOpen(false)} />}
        </div>
    );
} 
export default Programs;