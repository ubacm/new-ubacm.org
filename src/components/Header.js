import React from 'react';
import logo from './media/headerlogo.png';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <li>
                  <Link to ='/'>
                    <img src={logo} alt="Home" style={{width: '120%', cursor: 'pointer'}} />
                  </Link>
                </li>
                <li style = {{marginLeft: 800}}>
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
                <li>
                  <Link to="/stayintouch">Stay In Touch</Link>
                </li> 
            </ul>
        </nav>
  </header>
  );
};

export default Header;
