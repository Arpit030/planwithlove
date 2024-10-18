import { useState } from 'react'; 
// import logo from './logo.svg';
import './App.css';
import Data from './Data';
import Tours from './component/Tours';
function App() {
  const [tours , setTours] = useState(Data);

  if(tours.length === 0){
    return (
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button className='btn-white' onClick={()=> setTours(Data)}>
          Refresh
        </button>
      </div>
    );
  }

  function removeTour(id){
    const newTour = tours.filter(tour => tour.id !== id);
    setTours(newTour);
  }
  return (
    <div className='App'>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
