import React from "react";
import "./About.css";
import headshot from "../../assets/headshot.jpeg";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <div className="about-header-container">
        <img alt="" src={headshot} className="about-avatar" />
      </div>

      <section className="about-section">
        <p>
          My name is Samuel Villafana, and I am a web developer with a unique
          background in law enforcement. After graduating from a 6-month web
          developer bootcamp at Columbia, I have been able to successfully
          transition my skills to work as a police officer for the NYPD for over
          5 years. My passion for web development started as a hobby, but it
          quickly became clear to me that this was a field I wanted to pursue
          professionally. As a web developer, I enjoy the process of creating
          websites and applications that are not only visually appealing but
          also functional and user-friendly. With my experience in law
          enforcement, I bring a unique perspective to my work as a developer,
          and I am always looking for ways to use my skills to create innovative
          solutions to real-world problems.
        </p>
        <p>
         
        </p>
      </section>
    </div>
  );
};

export default About;
