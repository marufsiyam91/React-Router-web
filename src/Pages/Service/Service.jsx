import React from "react";
import dots from '../../assets/Images/Dot (1).png'
import circle from '../../assets/Images/Ellipse 87.png'
import square from '../../assets/Images/Rectangle 24.png'
import squaretwo from '../../assets/Images/Rectangle 25.png'
import cardone from '../../assets/Images/Group 65.png'
import cardtwo from '../../assets/Images/Group 66.png'
import cardthree from '../../assets/Images/Group 67.png'
import cardfour from '../../assets/Images/Group 69.png'
import './Service.css'



const Service = () => {
  return (
    <div>
      <section className="help">
        <div className="help-text">
          <img src={squaretwo} alt="" className="help-rect" />
          <h1 className="help-h1">
             Services we provide <br /> to your Business
          </h1>
          <p>
            We build readymade websites, mobile applications, <br /> and
            elaborate online business services.
          </p>

          <div className="help-dot">
            <img src={dots} alt="" className="help-dot-one" />
            <img src={dots} alt="" className="help-dot-two" />
          </div>
        </div>

        <div className="ideas">
          <img src={circle} alt="" className="idea-rect" />
          <img src={square} alt="" className="background" />
          <div className="first-row">
            <img src={cardone} alt="" className="idea-one child" />
            <img src={cardtwo} alt="" className="idea-two child" />
          </div>
          <div className="second-row">
            <img src={cardthree} alt="" className="idea-three child" />
            <img src={cardfour} alt="" className="idea-four child" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
