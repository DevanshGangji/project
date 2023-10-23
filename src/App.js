

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Navbar1 from './components/Navbar1';
import Productinfo from './components/Productinfo';

function App() {
  return (
    <div> 
      <div>
      <Navbar1/>  
     </div>
     <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/product-info/:productId' element={<Productinfo />} />
     </Routes>
     
     
    </div>
  );
}

export default App;
