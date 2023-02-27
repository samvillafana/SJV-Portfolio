import React from "react";
import { Link } from "react-router-dom";
import "./PortProject.css";
import { Project } from "../constants/projects";

type Props = {
  project: Project;
};

const PortProject = ({ project }: Props) => {
  return (
    <div className="project-container">
      <img className="project-image" alt="" src={project.imageUrl} />
      <p className="project-title">Project: {project.title}</p>
      <p className="project-github">
        <Link to={project.github}>Github</Link>
      </p>
    </div>
  );
};

export default PortProject;
