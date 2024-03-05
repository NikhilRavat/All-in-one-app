import { useState } from 'react';
import './App.css';
import NavBar from './components/shared/NavBar';
import SideBar from './components/shared/SideBar';
import { Outlet } from 'react-router-dom';
// import Counter from './components/Counter';

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const toggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  }
  return (
    <div className="page-wrapper">
      <div className="navigation-bar">
        <NavBar />
      </div>
      <div className="page-content">
        <div className="sidebar" style={{ width: sideBarOpen ? "220px" : "50px" }}>
          <SideBar toggleSideBar={toggleSideBar} sideBarOpen={sideBarOpen} />
        </div>
        <div className="content" style={{ width: sideBarOpen ? "calc(100vw - 220px)" : "calc(100vw - 50px)" }}>
          <div className="body-card">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="footer">
        Copyright &#169; 2024
      </div>
    </div>
  );
}

export default App;
