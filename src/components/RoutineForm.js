import React, { useState } from 'react';

const RoutineForm = ({ onAdd, onClose }) => {
    const [title, setTitle] = useState('');
    const [exercises, setExercises] = useState([{ name: '', duration: '' }]);

    const handleExerciseChange = (index, field, value) => {
        const newExercises = exercises.map((exercise, i) => 
            i === index ? { ...exercise, [field]: value } : exercise
        );
        setExercises(newExercises);
    };

    const handleAddExercise = () => {
        setExercises([...exercises, { name: '', duration: '' }]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRoutine = { title, data: exercises };
        onAdd(newRoutine);
        setTitle('');
        setExercises([{ name: '', duration: '' }]);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        placeholder="Routine Title" 
                        required 
                    />
                    {exercises.map((exercise, index) => (
                        <div key={index}>
                            <input 
                                type="text" 
                                value={exercise.name} 
                                onChange={(e) => handleExerciseChange(index, 'name', e.target.value)} 
                                placeholder="Exercise Name" 
                                required 
                            />
                            <input 
                                type="text" 
                                value={exercise.duration} 
                                onChange={(e) => handleExerciseChange(index, 'duration', e.target.value)} 
                                placeholder="Duration" 
                                required 
                            />
                        </div>
                    ))}
                    <button type="button" onClick={handleAddExercise}>Add Exercise</button>
                    <button type="submit">Add Routine</button>
                </form>
            </div>
        </div>
    );
};

export default RoutineForm;
