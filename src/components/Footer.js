import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo1 from './media/acmbull.png';
import logo2 from './media/ubseaslogo.png';
import logo3 from './media/salogo.png';
import logo4 from './media/acmlogo.png'
import logo5 from './media/discordlogo.png';
import logo6 from './media/githublogo.png';

const Footer = () => {
  const bodyText = "UB ACM is University at Buffalo's undergraduate computer science organization. Our mission is to empower student peers and help them find their path in computer science. We host a variety of extracurricular events -- We have bi-weekly meetings where our members or speakers run workshops and tech talks on the latest technologies used by professionals in industry or academia. Additionally, we run events like Hack Nights and social events to allow students to connect with others with similar interests."
  
  //Function for scrolling back to top of page
  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    });
  };



  return (
    <div className="footer">
        <div className= "left-half">
          <span style={{fontSize: 12, cursor: 'pointer'}} onClick={scrollToTop}>
            Return to Top
          </span>
          <p className="text">
            {bodyText}
          </p>
          <Link to ='/'>
          <img src={logo1} alt='' className="logo1"/>
          </Link>
          <Link to ='https://engineering.buffalo.edu/'>
          <img src={logo2} alt='' className="logo1"/>
          </Link>
          <Link to = 'https://www.sa.buffalo.edu/'>
          <img src={logo3} alt='' className="logo1"/>
          </Link>
          <Link to = 'https://www.acm.org/'>
            <img src={logo4} alt='' className="logo1"/>
          </Link>
        </div>
        <div className= "right-half">
          <h1 style={{fontSize: 12}}>
            Â© 2024 UB ACM
          </h1>
          <div className= "links1">
            <li className="link1">
              <Link to="/codeofconduct">Code of Conduct</Link>
            </li>
            <li className="link1">
              <Link to="/events">Event Schedule</Link>
            </li>
            <li className="link1">
              <Link to="/eboard">E-Board</Link>
            </li>
            <li className="link1">
              <Link to="/chapterconstitution">Constitution</Link>
            </li>
            <li className="links2">
              <Link to="https://discord.gg/dKyK8D27cK">
                <img src={logo5} alt='' style={{height: 41}}/>
              </Link>
              <Link to="https://github.com/ ">
                <img src={logo6} alt='' style={{height: 50}}/>
              </Link>
            </li>
          </div>
        </div>
    </div>
  );
};

export default Footer;