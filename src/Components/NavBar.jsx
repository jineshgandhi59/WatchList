import React from 'react';
import logo from '../assets/logo.jpg';
import {Link} from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <nav>
      <span className="logo">
        <img width={"50px"} src={logo} alt="Logo" />
      </span>
      <div className="paths">
        <Link to="/">Movies</Link>
        <Link to="/watchlist">WatchList</Link>
        <Link to="/recommended">Recommended</Link>
      </div>
      <span className="user">J</span>
    </nav>
  );
}

export default NavBar;
