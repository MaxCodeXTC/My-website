import React from "react";
import PropTypes from "prop-types";


const ProjectCard = ({ description, link, title }) => (
    
      <div className="project-grid-item">
        <p className="project-title"> {title}</p>
        <p className="project-desc"> {description}</p>
        <a className="project-src-code" href={link} rel="noopener noreferrer" target="_blank">Source Code</a>
      </div>
    
  );
  
  ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  };


export default ProjectCard;

