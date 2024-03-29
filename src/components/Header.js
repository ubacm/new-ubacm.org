import React from 'react';
import logo from './media/headerlogo.png';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className = "list-container-left">
        <Link to ='/'>
          <img src={logo} alt="Home" />
        </Link>
      </div>
      <div className="list-container-right">
        <nav>
            <ul>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/eboard">Eboard</Link>
                </li>
                <li>
                  <Link to="/codeofconduct">Code of Conduct</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
                <li>
                  <Link to="/chapterconstitution">Chapter Constitution</Link>
                </li>
                <li className='last-child'>
                  <Link to="/stayintouch">Stay In Touch</Link>
                </li> 
            </ul>
        </nav>
        </div>
  </header>
  );
};

export default Header;
