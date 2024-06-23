import { useState } from "react";

const RoutineForm = ({onAdd}) => {
    const [title, setTitle] = useState('');
    const [exo, setExo] = useState('');
    const [duration, setDuration] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRoutine = {
            title,
            data: [{ name:exo, duration:duration }]
        };
        onAdd(newRoutine);
        setExo('');
        setDuration('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Routine Title" 
                required 
            />
            <input 
                type="text" 
                value={exo} 
                onChange={(e) => setExo(e.target.value)} 
                placeholder="Exercise Name" 
                required 
            />
            <input 
                type="text" 
                value={duration} 
                onChange={(e) => setDuration(e.target.value)} 
                placeholder="Duration" 
                required 
            />
            <button type="submit">Add Routine</button>
        </form>
    );
    };

export default RoutineForm;