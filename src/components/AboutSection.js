import React, { useState } from "react";

function AboutSection(props) {
  return (
    <>
      <section id="about" className="section">
        <h1>About Me</h1>
        <h4 className="tagline">
          A creative and curiousity-driven programmer with an eye for details.
        </h4>
        <div id="innerBox">
          <p id="bio">
            I love creating beautiful things, and I get excited about bringing
            both the technical and visual aspects of a project to life. I'm
            happiest when I'm learning, creating, and exploring new things (and
            places!)
          </p>
          <p>
            I have a BA in Biology from the
            <a href="https://www.rit.edu" target="_blank" rel="noreferrer">
              Rochester Institute of Technology
            </a>
            , a certificate in Responsive Web Design from
            <a
              href="https://www.freecodecamp.org"
              target="_blank"
              rel="noreferrer"
            >
              www.freecodecamp.org
            </a>
            , and in June 2022 I'll complete the Software Engineering Immersive
            program at
            <a
              href="https://flatironschool.com"
              target="_blank"
              rel="noreferrer"
            >
              Flatiron School
            </a>
            .
          </p>
          <p>
            I'm passionate about: rock climbing, painting, sustainability,
            learning new languages, dancing, and traveling. In 2019 I left my
            career as a chemist and bought an old Sprinter van. After learning
            everything from construction to electrical systems and building my
            van into a tiny home, I spent a year living on the road, traveling
            the country from coast to coast.
          </p>
          <p>
            Currently based in NYC and looking for an internship or junior role
            to support a small creative team while further developing my coding
            and design skills.
          </p>
          {/* 
           <p>
              I'm happiest when I'm learning, creating, and exploring new things
              (and places!) Currently looking for an internship or junior role
              to support a small team while further developing my coding and
              design skills.
            </p> */}

          <button className="btn">
            <a
              href="https://manyroadstohere.blogspot.com"
              target="_blank"
              rel="noreferrer"
            >
              Follow my journey here
            </a>
          </button>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
