import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Profile() {
    const dispath = useDispatch();
    const user = useSelector(state => state.userReducer.user);
    const LogOutHandler = () => {
        dispath({ type: 'LOGOUT' })
    }
    return (!user.token ?
        <>
            <Link to={'/user/signup'} className='btn btn-warning me-2'>Sign Up</Link>
            <Link to={'/user/login'} className='btn btn-success'>Login</Link>
        </>
        :
        <>
            <h5 className='d-inline me-2 mb-0'>{user.firstName} {user.lastName}</h5>
            <button onClick={LogOutHandler} className='btn btn-warning'>LogOut</button>
        </>
    )
}

export default Profile
