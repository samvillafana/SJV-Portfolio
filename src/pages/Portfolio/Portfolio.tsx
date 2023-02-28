import React from "react";
import react from "../../assets/react.png";
import reactNative from "../../assets/react-native.png";
import node from "../../assets/node.png";
// import nextjs from "../../assets/nextjs.png";
import sql from "../../assets/sql.png";
import nosql from "../../assets/nosql.png";
import { PortProject } from "../../components";
import { projects } from "../../constants/projects";
import "./Portfolio.css";

const reactProjects = projects.filter((p) => p.type === "react");
const reactNativeProjects = projects.filter((p) => p.type === "react-native");
// const nextProjects = projects.filter((p) => p.type === "nextjs");
const nosqlProjects = projects.filter((p) => p.type === "nosql");
const sqlProjects = projects.filter((p) => p.type === "sql");
const nodeProjects = projects.filter((p) => p.type === "node");

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-row-header">
        <img alt="" src={react} className="portfolio-row-logo" />
        <h1 className="portfolio-title">Team-Projects</h1>
      </div>
      <div className="portfolio-row">
        {reactProjects.map((el) => (
          <PortProject key={reactProjects.indexOf(el)} project={el} />
        ))}
      </div>
      <div className="portfolio-row-header">
        <img alt="" src={reactNative} className="portfolio-row-logo" />
        <h1 className="portfolio-title">Home-Project</h1>
      </div>
      <div className="portfolio-row">
        {reactNativeProjects.map((el) => (
          <PortProject key={reactProjects.indexOf(el)} project={el} />
        ))}
      </div>
      {/* <div className="portfolio-row-header">
        <img alt="" src={nextjs} className="portfolio-row-logo" />
        <h1 className="portfolio-title">Nextjs</h1>
      </div>
      <div className="portfolio-row">
        {nextProjects.map((el) => (
          <PortProject key={reactProjects.indexOf(el)} project={el} />
        ))}
      </div> */}
      <div className="portfolio-row-header">
        <img alt="" src={nosql} className="portfolio-row-logo" />
        <h1 className="portfolio-title">NoSQL</h1>
      </div>
      <div className="portfolio-row">
        {nosqlProjects.map((el) => (
          <PortProject key={reactProjects.indexOf(el)} project={el} />
        ))}
      </div>
      <div className="portfolio-row-header">
        <img alt="" src={sql} className="portfolio-row-logo" />
        <h1 className="portfolio-title">SQL</h1>
      </div>
      <div className="portfolio-row">
        {sqlProjects.map((el) => (
          <PortProject key={reactProjects.indexOf(el)} project={el} />
        ))}
      </div>
      <div className="portfolio-row-header">
        <img alt="" src={node} className="portfolio-row-logo" />
        <h1 className="portfolio-title">Node </h1>
      </div>
      <div className="portfolio-row">
        {nodeProjects.map((el) => (
          <PortProject key={reactProjects.indexOf(el)} project={el} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
