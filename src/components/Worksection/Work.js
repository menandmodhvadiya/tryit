import React from "react";
import "../Worksection/worksection.css";
import Portfolio1 from "../../assets/portfolio-1.png";
import Portfolio2 from "../../assets/portfolio-2.png";
import Portfolio3 from "../../assets/portfolio-3.png";
import Portfolio4 from "../../assets/portfolio-4.png";
import Portfolio5 from "../../assets/portfolio-5.png";
import Portfolio6 from "../../assets/portfolio-6.png";

const Work = () => {
  return (
    <section id="workSection">
      <h2 className="workTitle">My Portfolio</h2>
      <span className="workDescription">
        I am a skilled MERN Stack Developer with experience in creating visualy
        appealing and user friendly webapllication. I am a skilled React Js
        Developer with experience in creating visualy appealing and user
        friendly webapllication. I am a skilled React Js Developer with
        experience in creating visualy appealing and user friendly
        webapllication.
      </span>
      <div className="workImages">
        <img src={Portfolio1} alt="first" className="workImmagesList" />
        <img src={Portfolio2} alt="first" className="workImmagesList" />
        <img src={Portfolio3} alt="first" className="workImmagesList" />
      </div>
      <button className="workBtn">See More</button>
    </section>
  );
};

export default Work;
