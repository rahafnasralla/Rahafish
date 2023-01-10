import React, { useContext } from 'react'
import { GlobalContext } from '../Utils/Context';
import { Navigate } from 'react-router-dom';

export default function Auth(props) {
    const auth = useContext(GlobalContext).auth;


    return (
        <div>
            {auth.user ?
                props.children
                :
                <Navigate to="/login" />
            }
        </div>
    )
}
