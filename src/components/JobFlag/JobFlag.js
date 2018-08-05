import React, { Component } from "react";
import styles from "./styles.css";

const JobFlag = () => (
  <div className="job-flag">
    <a
      href="mailto:abhighosh18@gmail.com?subject=Hello%20Abhishek 👋"
    >
      <span className="job-flag__text">
        Hire Me
        <span className="laptop-icon">
        👨🏻‍💻
        </span>
      </span>
    </a>
  </div>
);

export default JobFlag;
