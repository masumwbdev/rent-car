import React from 'react';
import useAuth from '../../../Hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user } = useAuth()
    let location = useLocation();
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }}
};

export default PrivateRoute;