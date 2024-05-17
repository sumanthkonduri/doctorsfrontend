import React from 'react';
import { Link } from 'react-router-dom';


const Navigate = () => {
  return (
    <nav className="navbar">
        <a id="logo">True <span>Care +</span></a>
        <Link to="/">Home</Link>
        <Link to="/doctor">Doctorr</Link>
        <Link to="/patient">Patient</Link>

    </nav>
  );
};

export default Navigate;
