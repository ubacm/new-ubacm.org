import React from 'react';
import logo from './headerlogo.png';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <li>
                  <Link to ='/'>
                    <img src={logo} alt="Home" style={{ width: '300px', cursor: 'pointer' }} />
                  </Link>
                </li>
                <li className="right-items">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="right-items">
                  <Link to="/eboard">Eboard</Link>
                </li>
                <li className="right-items">
                  <Link to="/codeofconduct">CodeofConduct</Link>
                </li>
                <li className="right-items">
                  <Link to="/events">Events</Link>
                </li>
                <li className="right-items">
                  <Link to="/chapterconstitution">ChapterConstitution</Link>
                </li>
                <li className="right-items">
                  <Link to="/stayintouch">StayInTouch</Link>
                </li> 
            </ul>
        </nav>
  </header>
  );
};

export default Header;
