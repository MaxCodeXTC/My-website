import React from 'react';
import Slide from "react-reveal/Slide";
import Title from "./BoxTitles"

function Introduction() {
  return (
    <Slide bottom>
    <div className="box" id="intro-box">
      <div id="intro-text">
      <Title title="Profile"/>
        <p>
          I am a computer science and engineering undergraduate student at
          the <a href="https://www.guc.edu.eg/" rel="noopener noreferrer" target="_blank">German University in Cairo</a> (2017-2022).
        </p>
        <p>
          Coding always has been my passion. I love using code to bring ideas to
          life. Recently I found my enthusiasm is growing towards web and
          mobile development, since then I never stopped learning new frameworks
          and technologies. I enjoy building projects, from small single-page
          applications to huge interactive ones.
        </p>
        <p>
          Half of my time spent coding and the other half spent either in arts
          or searching for new interesting books to read <span role="img" aria-label="aria-label">🤦🏻‍♀️</span>  <span id="book-recommend">(Recommend me a book)</span>. I also enjoy
          travelling and exploring but I rarely do because I am a lazy introvert
          who prefers staying at home.
        </p>
        {/* <span id="book-recommend">(Recommend me a book)</span> */}
      </div>
    </div>
    </Slide>
  );
}

export default Introduction;
