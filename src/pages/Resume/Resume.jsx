import React from "react";
import resume from './resume.pdf'


const Resume = () => {

  return (
    <iframe src={resume} height='800' width='100% '/>

  );
};

export default Resume;
