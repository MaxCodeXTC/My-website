import React from "react";
import Title from "./BoxTitles";
import Form from "./Form";
import SocialContact from "./SocialContact";

function ContactBox() {
  return (
    <div className="box" id="form-box">
      <Title title="Contact" />
      <Form email_book="E-mail:" content="Message:" />
      <hr></hr>
      <SocialContact />
    </div>
  );
}

export default ContactBox;
