import React from 'react';
import './Card.css'; 
import './CenteredContainer.css';
import hacknightsimage from "./media/hacknights.png";
import ubacmlogo from "./media/ubacm.png";
import workshopimg from "./media/workshop.jpg"
import techtalkimg from "./media/techtalk.jpg"
import bowling from "./media/bowling.jpg"


const About = () => {
  return (
    <div className="centered-container">
      <div className='card'>
      <div className="card-content">
        <h2>WHAT IS UB ACM?</h2>
        <p>We run student-led initiatives and events, all free for University at Buffalo students.</p>
        <img src={ubacmlogo} alt="Hack Nights Image" style={{width: "200px", height: "auto"}}/>
      </div>
      <div  className="card-content2">
        <p>ACM (Association of Computing Machinery) is the world's largest computing society, advancing the field through its premier Digital Library, publications, conferences, and career resources for members and professionals. 
        <br /><br />
          Our mission at the UB chapter of ACM is to empower student peers and guide them on their journey in computer science. Through an array of student-led initiatives and events, offered at no cost to University at Buffalo students, we foster an environment of learning and exploration in the field.</p>
      </div>
    </div>

    <div className='card'>
      <div className="card-content">
        <h2>HACK NIGHTS</h2>
        <p>Where coding meets collaboration in an exciting environment of innovation and learning.</p>
        <img src={hacknightsimage} alt="Hack Nights Image" style={{width: "200px", height: "auto"}}/>
      </div>
      <div  className="card-content2">
        <p>Build awesome projects, do homework, or just hang out with your fellow peers at hack night! Our Hack Nights event series are recurring Saturday events at University at Buffalo where students gather and work together in Davis 101. The event is sponsored by reputable companies from Buffalo and major tech hub. Learn more about Hack Nights here.</p>
      </div>
    </div>

    <div className='card'>
      <div className="card-content">
        <h2>OUR EVENTS</h2>
        <p>All of our weekly meetings, events, and hackathons are optional, so pick and choose your favorites to come. We'd love for you to come to all of them though!</p>
        <img src={workshopimg} alt="Hack Nights Image" style={{width: "200px", height: "120px", borderRadius: "10px", marginRight: "10px"}}/>
        <img src={techtalkimg} alt="Tech Talk Image" style={{width: "200px", height: "120px", borderRadius: "10px",marginRight: "10px"}}/>
        <img src={bowling} alt="Bowling Image" style={{width: "200px", height: "120px", borderRadius: "10px"}}/>
      </div>
      <div  className="card-content2">
        <p>Workshops: Discover a variety of introductory workshops led by experienced upperclassmen, covering technologies used in industry and academia. Topics include Introductory Python, Docker, Web Development, and Resume Reviews.
        <br /><br />
        Tech Talks: Delve into in-depth talks presented by university professors and industry speakers from leading companies including Cisco, Microsoft, and Stripe. Connect with professionals, explore their tools, and gain insights into their work.
        <br /><br />
        Social Events: Unwind and network at various social events, including board game nights, bowling, and barbecues. We also collaborate with companies such as Bloomberg to organize sponsored social events for students.</p>
      </div>
    </div>

    
  </div>
  );
};

export default About;