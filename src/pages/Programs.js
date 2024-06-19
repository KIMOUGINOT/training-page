import Routine from '../components/Routine';

const Programs = ({ routines }) => {
    return (
        <>
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
                />
            ))}
        </div>
        </>
    );
} 
export default Programs;