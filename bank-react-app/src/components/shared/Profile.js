import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Profile() {
    const token = useSelector(state => state.userReducer.token);
    return (!token ?
        <>
            <Link to={'/user/signup'} className='btn btn-warning me-2'>Sign Up</Link>
            <Link to={'/user/login'} className='btn btn-success'>Login</Link>
        </>
        :
        <>
            <Link to={'/user/logout'} className='btn btn-warning'>LogOut</Link>
        </>
    )
}

export default Profile
