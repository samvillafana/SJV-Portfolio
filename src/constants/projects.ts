import photo from "../assets/project.jpg";
import image from "../assets/project2.jpg";
import Shot from "../assets/project3.jpg";
import chat from "../assets/project4.jpg";
import soccer from "../assets/project5.jpg";
import gen from "../assets/project6.jpg";
import SQL from "../assets/project7.jpg";
import NOSQL from "../assets/project8.jpg";
import Code from "../assets/project9.jpg"
import News from "../assets/project10.jpg"
export interface Project {
  imageUrl: string;
  title: string;
  github: string;
  type: string;
}

export const projects: Project[] = [

 
  {
    imageUrl: chat,
    title: "talk-io",
    github: "https://github.com/samvillafana/talk-io",
    type: "react",
  }, 
  
  {
    imageUrl: Shot,
    title: "FLTCK",
    github: "https://github.com/samvillafana/FLTCHK-TRAVEL-TRACKER",
    type: "react",
  },
  {
    imageUrl:Code,
    title: "Code Tracker",
    github: "https://shrouded-harbor-45723.herokuapp.com/",
    type: "react",
  },
  {
    imageUrl: image,
    title: "Weather Dashboard",
    github: "https://samvillafana.github.io/weather-dashboard/",
    type: "react-native",
  },
  {
    imageUrl: News, title: "News App",
    github: "https://news-app-ashen-eight.vercel.app/news/general",
    type: "react",
  },
  {
    imageUrl: photo,
    title: "",
    github: "https://github.com/",
    type: "",
  },
  {
    imageUrl: photo,
    title: "",
    github: "https://github.com/",
    type: "",
  },
  {
    imageUrl: photo,
    title: "Dog Finder",
    github: "https://github.com/",
    type: "",
  },
  // {
  //   imageUrl: photo,
  //   title: "Dog Finder",
  //   github: "https://github.com/",
  //   type: "nextjs",
  // },
  // {
  //   imageUrl: photo,
  //   title: "Dog Finder",
  //   github: "https://github.com/",
  //   type: "nextjs",
  // },
  // {
  //   imageUrl: photo,
  //   title: "Dog Finder",
  //   github: "https://github.com/",
  //   type: "nextjs",
  // },
  {
    imageUrl: NOSQL,
    title: "social-network-app",
    github: "https://github.com/samvillafana/social-network-apihttps://github.com/samvillafana/social-network-api",
    type: "nosql",
  },
  {
    imageUrl: photo,
    title: "Dog Finder",
    github: "https://github.com/",
    type: "",
  },
  {
    imageUrl: photo,
    title: "Dog Finder",
    github: "https://github.com/",
    type: "",
  },
  {
    imageUrl: photo,
    title: "Dog Finder",
    github: "https://github.com/",
    type: "",
  },
  {
    imageUrl: SQL,
    title: "Employee Tracker",
    github: "https://github.com/samvillafana/employee_tracker/blob/main/README.md",
    type: "sql",
  },
  {
    imageUrl: photo,
    title: "Dog Finder",
    github: "https://github.com/",
    type: "",
  },
  {
    imageUrl: photo,
    title: "Dog Finder",
    github: "https://github.com/",
    type: "",
  },
  {
    imageUrl: photo,
    title: "Dog Finder",
    github: "https://github.com/",
    type: "",
  },
  {
    imageUrl: photo,
    title: "Dog Finder",
    github: "https://github.com/",
    type: "",
  },
  {
    imageUrl: gen,
    title: "README",
    github: "https://github.com/samvillafana/Professional-Readme-Generator",
    type: "node",
  },
  {
    imageUrl: photo,
    title: "Dog Finder",
    github: "https://github.com/",
    type: "",
  },
  {
    imageUrl: soccer,
    title: "World Cup",
    github: "https://samvillafana.github.io/QUIZ-CHALLENGE/",
    type: "",
  },
  {
    imageUrl: photo,
    title: "Dog Finder",
    github: "https://github.com/",
    type: "",
  },
  {
    imageUrl: soccer,
    title: "World Cup",
    github: "https://samvillafana.github.io/QUIZ-CHALLENGE/",
    type: "node",
  },
];
