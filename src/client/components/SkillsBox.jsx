import React from "react";
import Slide from "react-reveal/Slide";
import Title from "./BoxTitles";
import Skill from "./Skill";
import Language from "./Language";

function SkillsBox() {
  return (
    <Slide bottom>
    <div className="box" id="skills-languages-box">
      <Title title="Skills" />

      <section className="grid-container">

        <Skill skillName="Java" skillIconName="devicon-java-plain" />
        <Skill skillName="Html5" skillIconName="devicon-html5-plain" />
        <Skill skillName="Css3" skillIconName="devicon-css3-plain" />
        <Skill skillName="Javascript" skillIconName="devicon-javascript-plain" />
        <Skill skillName="React" skillIconName="devicon-react-original" />
        <Skill skillName="Python" skillIconName="devicon-python-plain" />
        <Skill skillName="Bootstrap" skillIconName="devicon-bootstrap-plain" />
        <Skill skillName="Sass" skillIconName="devicon-sass-original" />
        <Skill skillName="JQuery" skillIconName="devicon-jquery-plain" />
        <Skill skillName="Node js" skillIconName="devicon-nodejs-plain" />
        <Skill skillName="Express js" skillIconName="devicon-express-original" />
        <Skill skillName="MongoDBs" skillIconName="devicon-mongodb-plain" />
      </section>

      <br></br>
      <br></br>
      <hr></hr>

      <section className="grid-container">
      <Skill skillName="C++" skillIconName="devicon-cplusplus-plain" />
        <Skill skillName="Android" skillIconName="devicon-android-plain" />

        <div className="grid-item">
          <i className="skills-icon">
            <img
              className="pic-icon"
              src="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg"
              alt="dart-icon"
            />
          </i>
          <h4>Dart</h4>
        </div>

        <div className="grid-item">
          <i className="skills-icon">
            <img className="pic-icon"
              src="https://img.icons8.com/ios/50/000000/flutter.png"
              alt="flutter-icon"
            />
          </i>
          <h4>Flutter</h4>
        </div>

      </section>

      <hr></hr>
      <br></br>
      <Title title="Languages" />
      <section className="grid-container language-grid-container">
        <Language lang="Arabic" langDesc="(Mother-tongue)" />
        <Language lang="English" langDesc="(Fluent)" />
        <Language lang="German" langDesc="(Survivable)" />
        <Language lang="French" langDesc="(Beginner)" />
      </section>
    </div>
    </Slide>
  );
}


export default SkillsBox;
