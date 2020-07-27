import React from "react";
import Header from "./Header";
import WelcomeBox from "./WelcomeBox";
import Introduction from "./Introduction";
import Modal from "./Modal";
import SkillsBox from "./SkillsBox";
import Projects from "./Projects";
import ContactBox from "./ContactBox";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <WelcomeBox />
      <Introduction />
      <Modal />
      <SkillsBox />
      <Projects/>
      <ContactBox />
      <Footer/>
    </div>
  );
}

export default App;

//TODO:
// - recommend a book --> DB
// - contact form
// - "What's more"
// - blog
// - timeline
// - responsiveness of intro box photo
// - refactor "form" of modal