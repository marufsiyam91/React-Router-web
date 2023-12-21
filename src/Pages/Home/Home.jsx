import React from "react";
import './Home.css'
import heroimage from '../../assets/Images/luca-bravo-9l_326FISzk-unsplash.jpg'
import dots from '../../assets/Images/Dot (1).png'


const Home = () => {
  return (
    <>
      <div className="hero_container">
        <div className="text-area">
          <h1>A Digital Product Agency</h1>
          <p>
            Leading digital agency with solid design and development <br />{" "}
            expertise. We build readymade websites, mobile applications, <br />{" "}
            and elaborate online business services.
          </p>
          <button className="contact-btn">Contact Now</button>
            <img src={dots} alt="" />
        </div>

        <div className="working-image">
            <img src={heroimage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
