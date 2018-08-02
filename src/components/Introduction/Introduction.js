import React from "react";
import styles from "./styles.css";

import Skills from "../Skills";
import Links from "../Links";

const Introduction = () => (
  <div className="introduction">
    <div className="introduction__title_container">
      <span className="introduction__title-text">Hi 👋 I'm Abhishek Ghosh</span>
      <div className="introduction__subtitle-container">
        <span className="introduction__subtitle-text">Software Engineer</span>
      </div>
    </div>
    <Skills />
    <Links />
  </div>
);

export default Introduction;
