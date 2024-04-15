import React, { useState } from "react";
import "./navbar.css";
import logommt from "../../assets/mmo.png";
import contactButtonImg from "../../assets/contact.png";
import menu from "../../assets/menu.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <img src={logommt} alt="logo" className="logo" />
        <div className="desktopMenu">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuItem"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuItem"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="workSection"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuItem"
          >
            Portfolio
          </Link>
          <Link
            activeClass="active"
            to="clients"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuItem"
          >
            Clients
          </Link>
        </div>
        <button
          className="desktopMenuBtn"
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <img src={contactButtonImg} alt="" className="deskTopMenuImg" />
          Contact Me
        </button>

        {/* <img
          src={menu}
          alt="menu"
          className="mobmenu"
          onClick={() => setShowMenu(!showMenu)}
        /> */}
        {/* <div
          className="navMenu"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="workSection"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Portfolio
          </Link>
          <Link
            activeClass="active"
            to="clients"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Clients
          </Link>
          <Link
            activeClass="active"
            to="contactSection"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Contact
          </Link>
        </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
