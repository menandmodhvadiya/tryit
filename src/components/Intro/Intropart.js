import React from "react";
import "./intropart.css";
import bg from "../../assets/menand13.png";
import { Link } from "react-scroll";
import bgtnImg from "../../assets/hireme.png";

const Intropart = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello.</span>
        <span className="introText">
          I'm<span className="introName"> Menand Modhvadiya</span> <br />
          MERN Stack Developer
        </span>
        <p className="intropara">
          I am a skilled MERN Stack Developer with experience in creating
          <br /> visualy appealing and user friendly webapllication.
        </p>
        <Link>
          <button className="btn">
            <img src={bgtnImg} alt="btnImge" className="btnImge" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bgImage" />
    </section>
  );
};
export default Intropart;
