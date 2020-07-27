import React from "react";
import Slide from "react-reveal/Slide";
import Title from "./BoxTitles";
import ProjectCard from "./ProjectCard";

import projImg1 from "../images/project1.jpeg";
import projImg2 from "../images/project2.jpeg";
import projImg3 from "../images/project3.jpeg";
import projImg4 from "../images/project4.jpeg";
import projImg5 from "../images/project5.jpeg";
import projImg6 from "../images/project6.jpeg";

function Projects() {
  return (
      <div className="box" id="project-box">
        <Title title="Projects" />

        <Slide bottom>
          <div className="project-section">
          <img src={projImg1} alt="project1img" className="project-img"></img>
            <ProjectCard
              title="Keep my notes:"
              description="Web app built with React used to keep notes with titles"
              link="https://github.com/sarah23s/Keep-my-Notes"
            />
          </div>
        </Slide>

        <Slide bottom>
          <div className="project-section">
          <img src={projImg2} alt="project2img" className="project-img"></img>
            <ProjectCard
              title="Foreigner:"
              description="A travel app that obtains a desired trip location and date from the user, and displays weather and an image of the location using information obtained from external APIs"
              link="https://github.com/sarah23s/Travel-App"
            />
          </div>
        </Slide>

        <Slide bottom>
          <div className="project-section">
          <img src={projImg3} alt="project3img" className="project-img"></img>
            <ProjectCard
              title="Article Evaluator:"
              description="Building a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites"
              link="https://github.com/sarah23s/Evaluate-Articles-with-NPL"
            />
          </div>
        </Slide>

        <Slide bottom>
          <div className="project-section">
          <img src={projImg4} alt="project4img" className="project-img"></img>
            <ProjectCard
              title="Weather App:"
              description="Creating an asynchronous web app that uses Web API and user data to dynamically update the UI."
              link="https://github.com/sarah23s/Weather-Journal-App"
            />
          </div>
        </Slide>

        <Slide bottom>
          <div className="project-section">
          <img src={projImg5} alt="project5img" className="project-img"></img>
            <ProjectCard
              title="Simon Game:"
              description="A simple game designed with js where the user needs to memorise the patter of colors targeted adding a new one at each level"
              link="https://github.com/sarah23s/Simon-Game"
            />
          </div>
        </Slide>

        <Slide bottom>
          <div className="project-section">
          <img src={projImg6} alt="project6img" className="project-img"></img>
            <ProjectCard
              title="BMI calculator:"
              description="A Flutter App where the user adjusts the weight and height and chooses the gender then the bmi is calculated"
              link="https://github.com/sarah23s/BMI-calculator/tree/master"
            />
          </div>
        </Slide>
      </div>
  );
}

export default Projects;