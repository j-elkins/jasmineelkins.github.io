import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { SiJavascript, SiRubyonrails, SiVisualstudio } from "react-icons/si";
import { DiResponsive } from "react-icons/di";
import { VscRuby } from "react-icons/vsc";

function SkillsSection(props) {
  return (
    <>
      <section id="toolbox" className="section">
        <h1>Skills & Tools</h1>
        <div id="toolIconsDiv">
          <div className="tool grid-item">
            <SiJavascript size={55} />
            <p>JavaScript</p>
          </div>

          <div className="tool grid-item">
            <FaReact size={55} />
            <p>ReactJS</p>
          </div>

          <div className="tool grid-item">
            <VscRuby size={55} />
            <p>Ruby</p>
          </div>

          <div className="tool grid-item">
            <SiRubyonrails size={55} />
            <p>Rails</p>
          </div>

          <div className="tool grid-item">
            <FaHtml5 size={55} />
            <p>HTML</p>
          </div>

          <div className="tool grid-item">
            <FaCss3Alt size={55} />
            <p>CSS</p>
          </div>

          <div className="tool grid-item">
            <FaGithub size={55} />
            <p>GitHub</p>
          </div>

          <div className="tool grid-item">
            <FaGitAlt size={55} />
            <p>Git</p>
          </div>

          <div className="tool grid-item">
            <SiVisualstudio size={55} />
            <p>VS Code</p>
          </div>

          <div className="tool grid-item">
            <DiResponsive size={55} />
            <p>
              Responsive <br />
              Websites
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default SkillsSection;
