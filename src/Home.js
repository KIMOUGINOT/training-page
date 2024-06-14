import Routine from './Routine';

const Home = (routines) => {
    return (
        <div className="main">
                {routines.map((routine, index) => (
                    <Routine
                        key={index}
                        title={routine.title}
                        data={routine.data}
                    />
                ))}
        </div>
    );
} 
export default Home;