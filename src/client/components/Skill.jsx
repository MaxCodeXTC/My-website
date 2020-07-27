import React from "react";
import Zoom from "react-reveal/Zoom";
import PropTypes from "prop-types";

const Skill = ({ skillName, skillIconName }) => (
  <Zoom>
    <div className="grid-item" >
      <i className={`skills-icon ${skillIconName}`}></i>
      <h4>{skillName}</h4>
    </div>
  </Zoom>
);

Skill.propTypes = {
  skillName: PropTypes.string.isRequired,
  skillIconName: PropTypes.string.isRequired
};

export default Skill;

//try on mouseevent in react