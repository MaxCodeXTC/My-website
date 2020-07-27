import React from "react";
import Fade from "react-reveal/Fade";
import SocialContact from "./SocialContact";


function WelcomeBox() {
  return (
    <Fade bottom duration={5000} distance="0px">
    <div className="box main-box" >
      <div className="welcome-text">
        <h3>Hey, I am</h3>
        <h1 id="myName">Sarah Abdelfattah</h1>

        <div className="typewriter">
          <h3 className="short-desc">CS Student</h3>
          <h3 className="short-desc">Passionate coder</h3>
          <h3 className="short-desc">Creative web developer</h3>
          <SocialContact />
        </div>
      </div>

      
    </div>
    </Fade>
  );
}

export default WelcomeBox;
