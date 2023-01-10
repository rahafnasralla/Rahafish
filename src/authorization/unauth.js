import React, { useContext } from 'react'
import { GlobalContext } from '../Utils/Context';
import { Navigate, useLocation } from 'react-router-dom';

export default function UnAuth(props) {
    const auth = useContext(GlobalContext).auth;
    const location = useLocation();

    return (
        auth.user ?
            <Navigate to={location.state?.fullPath} />
            :
            props.children
    )

}
