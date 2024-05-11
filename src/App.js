import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/home/Homepage';
import Roompage from './pages/room/Roompage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/room/:roomId' element={<Roompage/>}/>
      </Routes>
    </div>
  );
}

export default App;
