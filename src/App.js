import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login'
import Register from './Pages/Login/Register/Register'
import RentBike from './Pages/RentBike/RentBike';
import RentCar from './Pages/RentCar/RentCar';
import RentScooty from './Pages/RentScooty/RentScooty';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='car' element={<RentCar />} />
        <Route path='bike' element={<RentBike />} />
        <Route path='scooty' element={<RentScooty />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
