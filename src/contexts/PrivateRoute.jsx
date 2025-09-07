import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth()
    const location = useLocation()
    if(loading) return <h1>Loading...</h1>
    if(user && user.email){
        return children
    }
    else{
        <Navigate state={location.pathname} to={`/login`}></Navigate>
    }
};

export default PrivateRoute;