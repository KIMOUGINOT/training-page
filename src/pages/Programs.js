import Routine from '../components/Routine';

const Programs = ({ routines }) => {
    return (
        <>
            {routines.map((routine, index) => (
                <Routine
                    key={index}
                    title={routine.title}
                    data={routine.data}
                />
            ))}
        </>
    );
} 
export default Programs;