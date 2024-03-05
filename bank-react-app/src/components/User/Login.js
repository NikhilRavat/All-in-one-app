import React, { useState } from 'react'
import HttpService from '../../Fetch/fetch';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const UserFormSuccess = (user) => {
        dispatch({ type: "SET_TOKEN", payload: user })
        if (user.token) {
            navigate('/home');
        }
    }

    const Error = (error) => {
        console.log(error);
    }

    const SubmitLoginForm = (event) => {
        event.preventDefault();
        HttpService.PostData(`https://localhost:44367/api/Account/signIn/${userName}/${password}`, {}, {},
            UserFormSuccess,
            Error);
    }


    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card mt-5">
                        <div className="card-body">
                            <form onSubmit={SubmitLoginForm}>
                                <div className="form-group">
                                    <label htmlFor="username">UserName</label>
                                    <input type='text' name='username'
                                        value={userName} onChange={(e) => setUserName(e.target.value)}
                                        className='form-control' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type='password' name='password'
                                        value={password} onChange={(e) => setPassword(e.target.value)}
                                        className='form-control' />
                                </div>
                                <hr />
                                <input type='submit' className='btn btn-primary me-2' value="Submit" />
                                <input type='reset' className='btn btn-outline-secondary' value="Reset" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
