import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Booking from './Pages/Booking/Booking';
import Contact from './Pages/Contact/Contact';
import AddProducts from './Pages/Dashboard/AddProducts/AddProducts';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import GiveReview from './Pages/Dashboard/GiveReview/GiveReview';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login/Login'
import Register from './Pages/Login/Register/Register'
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="dashboardHome" element={<DashboardHome />} />
            <Route path="myOrders" element={<MyOrders />} />
            <Route path="giveReview" element={<GiveReview />} />
            <Route path="addProducts" element={<AddProducts />} />
            <Route path="makeAdmin" element={<MakeAdmin />} />
          </Route>
          <Route path='services' element={<Services />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='contact' element={<Contact />} />
          <Route path='/booking/:bookingId' element={<Booking />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </div >
  );
}

export default App;
