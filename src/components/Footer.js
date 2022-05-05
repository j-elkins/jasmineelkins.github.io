import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

function Footer(props) {
  return (
    <>
      <div id="altFooter">
        <footer>
          <p>
            Designed & built by Jasmine Elkins &nbsp; | &nbsp; December 2021
            &nbsp;&nbsp;
            <a
              href="https://github.com/jasmineelkins/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </p>
        </footer>
      </div>

      <footer className="footer hidden">
        <p>
          Designed & built by Jasmine Elkins &nbsp; | &nbsp; December 2021
          &nbsp;&nbsp;
        </p>

        <a
          href="https://github.com/jasmineelkins/"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </footer>
    </>
  );
}

export default Footer;
