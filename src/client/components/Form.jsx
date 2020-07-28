import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

const Form = ({ email_book, content }) => (
  <form action="/success" name="contact" id="contact-form" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/success">
    <div className="form-group">
      <label htmlFor="name">Your name:</label>
      <input type="text" className="form-control" id="name" name="form-name" required />
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">{email_book}</label>
      <input
        type="text"
        className="form-control"
        id="email"
        name="email"
        aria-describedby="emailHelp"
      />
    </div>
    <div className="form-group">
      <label htmlFor="message">{content}</label>
      <textarea className="form-control" rows="3" id="message" name="message"></textarea>
    </div>
    
    <button type="submit" className="submit-btn">
      Send
    </button>
  </form>
);

// function handleSubmit(e) {
//   e.preventDefault();
//   const name = document.getElementById("name").value;
//   const em_book = document.getElementById("email").value;
//   const message = document.getElementById("message").value;

//   console.log("name: " + name);
//   console.log("em_book" + em_book);
//   console.log("message: " + message);


//   axios({
//     method: "POST",
//     url: "/send",
//     data: {
//       name: name,
//       email: em_book,
//       message: message,
//     }
//   }).then(response => {
//     if (response.data === "success") {
//       window.alert("Message Sent.");
//       console.log("MESSAGE SENT");
//       resetForm();
//     } else if (response.data === "fail") {
//      window.alert("Message failed to send.");
//      console.log("MESSAGE NOT SENT");
//     }
//   });
// }

// function resetForm() {
//   document.getElementById("contact-form").reset();
// }

// Form.propTypes = {
//   email_book: PropTypes.string.isRequired,
//   content: PropTypes.string.isRequired
// };

export default Form;
