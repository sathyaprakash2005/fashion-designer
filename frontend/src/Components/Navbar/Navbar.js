import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <nav className="navbar-container">
      <header className="navbar">
        <div className="logo">
          SRISHIVA<br /><span>FASHION DESIGNER</span>
        </div>

        {/* Desktop Nav */}
        <div className="nav-links desktop">
          <Link to="/combine">Home</Link>
          <Link to="/home">View</Link>
          <Link to="/service">Service</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/">Logout</Link>
        </div>

        {/* Mobile Icon */}
        <button className="menu-icon mobile" onClick={toggleDrawer}>☰</button>
      </header>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="drawer">
          <button className="close-drawer" onClick={closeDrawer}>×</button>
          <Link to="/combine" onClick={closeDrawer}>Home</Link>
          <Link to="/home" onClick={closeDrawer}>View</Link>
          <Link to="/service" onClick={closeDrawer}>Service</Link>
          <Link to="/contact" onClick={closeDrawer}>Contact</Link>
          <Link to="/" onClick={closeDrawer}>Logout</Link>
          <div className="mobile-contact">
          <span className="reservations">For any website creation</span>
          <a className="phone" href="tel:7010422586">📞 9361 0185 36</a>
    </div>
        </div>
      )}

      
    </nav>
  );
};

export default Navbar;
