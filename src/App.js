import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login/Login'
import Register from './Pages/Login/Register/Register'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='services' element={<Services />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
