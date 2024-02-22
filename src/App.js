import './App.css';
import Tracker from './Tracker';

function App() {
  return (
      <div className='m-16 font-poppins font-semibold text-4xl text-center text-white'>
        <p className='p-4'> Cryptocurrency Realtime Price </p>
        <div className=' w-full flex flex-row'>
          <Tracker />
        </div>
      </div>
  );
}

export default App;
