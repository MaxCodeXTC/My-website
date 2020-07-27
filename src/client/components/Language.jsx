import React from "react";
import PropTypes from "prop-types";

const Language = ({ lang, langDesc }) => (
  <div className="grid-item">
    <h4>{lang}</h4>
    <h5>{langDesc}</h5>
  </div>
);

Language.propTypes = {
  lang: PropTypes.string.isRequired,
  langDesc: PropTypes.string.isRequired
};

export default Language;
