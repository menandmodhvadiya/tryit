import React from "react";
// import './contact.css';
import "../contact/contact.css";
import walmart from "../../assets/walmart.png";
import microSoft from "../../assets/microsoft.png";
import Adobe from "../../assets/adobe.png";
import faceBook from "../../assets/facebook.png";
import faceBookIcon from "../../assets/facebook-icon.png";
import instagramIcon from "../../assets/instagram.png";
import twitterIcon from "../../assets/twitter.png";
import youTubeIcon from "../../assets/youtube.png";

const Contact = () => {
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <span className="clientDesc">
          I am a MERN Stack Developer with experience in creating visualy
          appealing and user friendly web apllication. I am a skilled MERN Stack
          Developer with experience in creating visualy appealing and user
          friendly web apllication. I am a skilled MERN Stack Developer with
          experience in creating visualy appealing and user friendly web
          apllication.
        </span>
        <div className="clientImgs">
          <img src={microSoft} alt="clientImg" className="clientImg" />
          <img src={faceBook} alt="clientImg" className="clientImg" />
          <img src={Adobe} alt="clientImg" className="clientImg" />
          <img src={walmart} alt="clientImg" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          I am a skilled MERN Stack with experience in creating visualy
          appealing and user friendly webapllication
        </span>
        <form className="contactForm">
          <input type="text" className="name" placeholder="yourName" />
          <input type="email" className="email" placeholder="yourEmai" />
          <textarea
            className="msg"
            name="message"
            rows={5}
            placeholder="your messa"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={faceBookIcon} alt="faceBookIcon" className="link" />
            <img src={instagramIcon} alt="instagramIcon" className="link" />
            <img src={youTubeIcon} alt="youTubeIcon" className="link" />
            <img src={twitterIcon} alt="twitterIcon" className="link" />
          </div>
        </form>
      </div>
      <footer className="footer">
        Copyright &#169;2024 Menand Modhvadiya.All rights reserved.
      </footer>
    </section>
  );
};

export default Contact;
