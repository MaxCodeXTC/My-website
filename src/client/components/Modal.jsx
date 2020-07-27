import React from "react";
import axios from "axios";

function Modal() {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span id="modal_close">&times;</span>

        <div id="modal_card">
          <h4>Book recommendation</h4>
          <form
            id="contact-form"
            onSubmit={handleSubmit.bind(this)}
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Your name:</label>
              <input type="text" className="form-control" id="modal-name" required />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Book's title: </label>
              <input
                type="text"
                className="form-control"
                id="modal-book-title"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Any comments/reviews?</label>
              <textarea
                className="form-control"
                rows="3"
                id="modal-comments"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send
            </button>
          </form>{" "}
        </div>
      </div>
    </div>
  );
}

function handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("modal-name").value;
    const em_book = document.getElementById("modal-book-title").value;
    const message = document.getElementById("modal-comments").value;
  
    axios({
      method: "POST",
      url: "/send",
      data: {
        name: name,
        email: em_book,
        message: message
      }
    }).then(response => {
      if (response.data === "success") {
        window.alert("Message Sent.");
        console.log("MESSAGE SENT");
        closeForm();
      } else if (response.data === "fail") {
       window.alert("Message failed to send.");
       console.log("MESSAGE NOT SENT");
      }
    });
  }
  
  function closeForm() {
    document.getElementById("myModal").style.display= "none";
  }

export default Modal;
