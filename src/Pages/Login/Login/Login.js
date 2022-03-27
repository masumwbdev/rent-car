import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import BottomFooter from '../../Shared/Footer/BottomFooter/BottomFooter';
import TopFooter from '../../Shared/Footer/TopFooter/TopFooter';
import Navbar from '../../Shared/Navbar/Navbar';
import TopNav from '../../Shared/TopNav/TopNav';
import './Login.css'
import google from '../../../images/google.png'
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginInUsingGoogle, error, loginAuth } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    console.log(user)
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = (e) => {
        loginAuth(loginData.email, loginData.password, location, navigate)
        e.preventDefault()
    }
    return (
        <div>
            <TopNav />
            <Navbar />
            <div className="width-control row login-page">
                <div className="col-sm-12 col-md-4">

                </div>
                <div data-aos="fade-up"
     data-aos-duration="2000" className="col-sm-12 col-md-4 login-form">
                    <h3>Log in or sign up in seconds</h3>
                    <small>Use your email or another service to continue with Rent Car (it's free)!</small>
                    <form onSubmit={handleLoginSubmit}>
                        <input required onBlur={handleOnBlur} name="email" type="email" placeholder='Your email' />
                        <br />
                        <input required onBlur={handleOnBlur} name="password" type="password" placeholder='Your password' />
                        <br />
                        <p className='mt-3'>New user? please <Link to="/register">Register</Link></p>
                        <input className='submit-btn mb-3' type="submit" value="Submit" />
                    </form>
                    <button onClick={loginInUsingGoogle} className='hvr-sweep-to-bottom hvr-ripple-out google-login d-flex align-items-center'> <span><img className='google-icon fs-6' src={google} alt="" /></span> <span className='google-content text-center'>Continue With Google</span></button>
                    {error && <p>{error}</p>}
                    <br />
                    <small>By continuing, you agree to Rent car Terms of Use(opens in a new tab or window). Read our Privacy Policy(opens in a new tab or window).</small>
                </div>
                <div className="col-sm-12 col-md-4">

                </div>
            </div>
            <TopFooter />
            <BottomFooter />
        </div>
    );
};

export default Login;