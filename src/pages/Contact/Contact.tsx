import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <section>
        <p>
          Email:{" "}
          <span>
            <a href="https://mail.google.com">sjvillafana@gmail.com</a>
          </span>{" "}
        </p>
        <p>
          Phone:{" "}
          <span>
            <a href="tel:19176182109">917-618-2109</a>
          </span>{" "}
        </p>
        <p>
          LinkedIn:{" "}
          <span>
            {" "}
            <a href="https://www.linkedin.com/in/samuelvillafana/">
              www.linkedin.com
            </a>
          </span>{" "}
        </p>
        <p>
          Github:
          <span>
            {" "}
            <a href="https://github.com/samvillafana">www.github.com</a>
          </span>
        </p>
      </section>
    </div>
  );
};

export default Contact;
