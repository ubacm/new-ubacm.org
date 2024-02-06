import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import workshopimg from "./media/workshop.jpg"
import techtalkimg from "./media/techtalk.jpg"
import bowling from "./media/bowling.jpg"

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 10,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set the autoplay speed in milliseconds
    fade: true,// Enable fade transition
    waitForAnimate: true
  }
  return (

    <div style={{ display: "flex", marginTop:"100px"}}>

      <div style={{ marginRight: "300px" , marginTop: "120px"}}>
        <h1 style={{marginLeft: "120px"}}>Computer science by students for students</h1>
        <p style={{marginLeft: "100px"}}>Our mission is to empower student peers and help them find their path in computer science at UB.</p>
      </div>

      <div style={{ maxWidth: "650px" }}>
        <Slider {...settings}>
          <div>
            <img src={workshopimg} alt="Slide 1" style={{ width: "100%", height: "400px", borderRadius: "10px" }} />
          </div>
          <div>
            <img src={techtalkimg} alt="Slide 2" style={{ width: "100%", height: "400px", borderRadius: "10px" }} />
          </div>
          <div>
            <img src={bowling} alt="Slide 3" style={{ width: "100%", height: "400px", borderRadius: "10px" }} />
          </div>
        </Slider>
      </div>
    </div>

  
    );
};
  
  export default Home;
  