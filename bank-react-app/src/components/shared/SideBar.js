import React from 'react'
import styles from './SideBar.module.css'
import { Link } from 'react-router-dom'

function SideBar({ sideBarOpen, toggleSideBar }) {
    return (
        <div>
            <header className={styles.header}>
                <Link to={'/home'} style={{ display: sideBarOpen ? 'inline' : 'none' }}>
                    Bank App
                </Link>
                <i className="bi bi-list" onClick={toggleSideBar}></i>
            </header>
            <hr />
            <ul className={styles.navLinks}>
                <li>
                    <Link to={'/banks'}><i className='bi bi-bank'></i>Banks</Link>
                </li>
                <li>
                    <Link to={'/open-account'}><i className="bi bi-person"></i>Account</Link>
                </li>
            </ul>
        </div>
    )
}

export default SideBar
