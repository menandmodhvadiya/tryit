import React from "react";
import "../Skillbar/skillbar.css";
import Webdesign from "../../assets/website-design.png";
import Appdesign from "../../assets/app-design.png";

const Skillbar = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span>
      <span className="skillDesc">
        I specialize in developing visually stunning and intuitive web
        applications using the MERN stack. My expertise lies in crafting
        user-friendly interfaces and leveraging cutting-edge technologies to
        deliver high-quality solutions.
      </span>
      <div className="skillBars">
        <div className="skillbar">
          <img src={Webdesign} alt="Web Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>
              I am a skilled MERN Stack Developer with experience in creating
              visually appealing and user-friendly web applications using
              MongoDB, Express.js, React, and Node.js.
            </p>
          </div>
        </div>
        <div className="skillbar">
          <img src={Appdesign} alt="App Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Application Development</h2>
            <p>
              I leverage the MERN stack to build dynamic and feature-rich web
              applications, delivering seamless user experiences and robust
              functionalities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skillbar;
