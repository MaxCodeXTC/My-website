import React from "react";

function Header() {
  return (
    <header >
      <ul className="nav-bar" id="nav-bar">
      <li className="nav-item"><a href="#intro-box">Who I am</a></li>
      <li className="nav-item"><a href="#skills-languages-box">What can I do</a></li>
      <li className="nav-item"><a href="#project-box">What did I do</a></li>
      {/* <li className="nav-item"><a href="#skills">What's more</a></li> */}
      </ul>
    </header>
  );
}

export default Header;
