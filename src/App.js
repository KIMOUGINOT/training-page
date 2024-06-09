import logo from './logo.svg';
import './App.css';
import Routine from './Routine';
import Exo from './Exo';

function App() {
  const data = [
    { name: "jump rope", duration: "30 sec" },
    { name: "push up", duration: "60 sec" },
    { name:"sit up", duration:"60 sec"},
    { name:"pull up", duration:"AMRAP"}
  ];

  return (
    <div className="App">
      <h1 className='title'>Training App</h1>
      <div className='routine-container'>
        <Routine name='Monday' data={data}/>
        <Routine name='Tuesday' data={data}/>
        <Routine name='Tuesday' data={data}/>
      </div>
    </div>
  );
}

export default App;

