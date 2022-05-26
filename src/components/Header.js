import React, { useState } from "react";
import headshot from "../assets/images/other/headshot.png";
import { FaGithub, FaLinkedin, FaEnvelope, FaBlogger } from "react-icons/fa";
import { ImEarth } from "react-icons/im";

function Header(props) {
  return (
    <>
      <header className="hero">
        <div className="headshot">
          <img src={headshot} className="portrait" alt="Portrait" />
        </div>

        <h1>Hi!</h1>
        <h2>I'm Jasmine</h2>
        <h3>software engineer</h3>
        <h4>scientist, artist, rock climber, explorer</h4>

        <div id="locationIcon">
          <ImEarth size={30} />
          <h5>
            &nbsp;<b> New York, NY</b>
          </h5>
        </div>

        <div id="iconContainer">
          <a
            href="mailto:jasmine.elkins@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/jasmineelkins"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jasmine-elkins/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://manyroadstohere.blogspot.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaBlogger />
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
