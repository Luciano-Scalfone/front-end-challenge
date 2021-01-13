import React from 'react';
import { Link } from 'react-router-dom';
import logoBlog from '../Medias/logoBlog.png';

const Header = () => {
  return (
    <header>
      <div className="search-bar">
        <Link to="/">
          <img src={logoBlog} height="40px" alt="logo image" />
        </Link>
        <div>
          <input type="text" placeholder="Search..." />
          <button title="button">Ir</button>
        </div>
      </div>
    </header>
  )
}

export default Header;
