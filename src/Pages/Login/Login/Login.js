import React from 'react';
import { Link } from 'react-router-dom';
import BottomFooter from '../../Shared/Footer/BottomFooter/BottomFooter';
import TopFooter from '../../Shared/Footer/TopFooter/TopFooter';
import Navbar from '../../Shared/Navbar/Navbar';
import TopNav from '../../Shared/TopNav/TopNav';
import './Login.css'
import google from '../../../images/google.png'

const Login = () => {
    return (
        <div>
            <TopNav />
            <Navbar />
            <div className="width-control row login-page">
                <div className="col-sm-12 col-md-4">

                </div>
                <div className="col-sm-12 col-md-4 login-form">
                    <h3>Log in or sign up in seconds</h3>
                    <small>Use your email or another service to continue with Rent Car (it's free)!</small>
                    <form>
                        <input required type="email" placeholder='Your email' />
                        <br />
                        <input required type="password" placeholder='Your password' />
                        <br />
                        <p className='mt-3'>New user? please <Link to="/register">Register</Link></p>
                        <input className='submit-btn mb-3' type="submit" value="Submit" />
                    </form>
                    <button className='hvr-sweep-to-bottom hvr-ripple-out google-login d-flex align-items-center'> <span><img className='google-icon fs-6' src={google} alt="" /></span> <span className='google-content text-center'>Continue With Google</span></button>
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