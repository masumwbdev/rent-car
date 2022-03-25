import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login'
import Register from './Pages/Login/Register/Register'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='login' element={<Register />} />
        <Route path='login' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
