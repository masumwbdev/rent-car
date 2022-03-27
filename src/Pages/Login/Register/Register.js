import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import BottomFooter from '../../Shared/Footer/BottomFooter/BottomFooter';
import TopFooter from '../../Shared/Footer/TopFooter/TopFooter';
import Navbar from '../../Shared/Navbar/Navbar';
import TopNav from '../../Shared/TopNav/TopNav';

const Register = () => {
    const [regData, setRegData] = useState({});
    const { registerAuth, error } = useAuth();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegData = { ...regData };
        newRegData[field] = value;
        setRegData(newRegData);
        console.log(newRegData);
    }
    const handleRegSubmit = e => {
        registerAuth(regData.email, regData.password, regData.name)
        e.preventDefault();
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
                    <h3>Register</h3>
                    <small>Use your email or another service to continue with Rent Car (it's free)!</small>
                    <form onSubmit={handleRegSubmit}>
                        <input onBlur={handleOnBlur} name="name" required type="text" placeholder='Your name' />
                        <br />
                        <input onBlur={handleOnBlur} name="email" required type="email" placeholder='Your email' />
                        <br />
                        <input onBlur={handleOnBlur} name="password" required type="password" placeholder='Your password' />
                        <br />
                        <p className='mt-3'>Already registerd? please <Link to="/login">Login</Link></p>
                        <input className='submit-btn mb-3' type="submit" value="Submit" />
                    </form>
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

export default Register;