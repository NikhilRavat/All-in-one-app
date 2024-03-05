import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Profile from './Profile';

function NavBar() {
    const token = useSelector((state) => state.userReducer.user.token);
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to={`/`}>
                    <img className='logoImage' src="./../image.png" alt="App Logo" />
                    My Bank App
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    </ul>
                    <span className="navbar-text py-0 d-flex align-items-center">
                        <Profile />
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
