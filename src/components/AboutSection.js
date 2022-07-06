import React from "react";

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
            I love building beautiful things, and I get excited about bringing
            both the technical and visual aspects of a project to life. I'm
            happiest when I'm learning, creating, and exploring new things (and
            places!)
          </p>
          <p>
            I have a BS in Biology from the{" "}
            <a href="https://www.rit.edu" target="_blank" rel="noreferrer">
              Rochester Institute of Technology
            </a>
            , a certificate in Responsive Web Design from{" "}
            <a
              href="https://www.freecodecamp.org"
              target="_blank"
              rel="noreferrer"
            >
              FreeCodeCamp
            </a>
            , and I recently graduated from the Full-Stack Software Engineering
            program at{" "}
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
            Things I'm passionate about: sustainability, women's health, rock
            climbing, painting, learning new languages, dancing, traveling, and
            technology. In 2019 I left my career as a chemist and bought an old
            Sprinter van. After learning everything from construction to
            electrical systems and building my van into a tiny home, I spent a
            year living on the road, traveling solo from coast to coast. While I
            was on the road I started teaching myself how to code, eventually
            deciding to enroll in a full-time bootcamp and pursue my dream of
            becoming a software engineer.
          </p>
          <p>
            I'm currently based in NYC and looking for an internship or junior
            role to support a driven, creative team while further developing my
            programming skills.
          </p>
          {/* 
           <p>
              I'm happiest when I'm learning, creating, and exploring new things
              (and places!) Currently looking for an internship or junior role
              to support a small team while further developing my coding and
              design skills.
            </p> */}
          {/* 
          <button className="btn">
            <a
              href="https://manyroadstohere.blogspot.com"
              target="_blank"
              rel="noreferrer"
            >
              Follow my journey here
            </a>
          </button> */}
          <button className="btn">
            <a
              href="https://drive.google.com/file/d/14uxEzjfbVy5CXxZaWjX6YHcMxWlij30u/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Click to view my resume
            </a>
          </button>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
