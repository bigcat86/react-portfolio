import React from "react";

const email = document.getElementById('email-address');
const message = document.getElementById('email-body');

export default function Contact() {
  const handleClick = () => {
    alert("Thank you for your message!");
    email.value = '';
    message.value = '';
  };

  return (
    <div className="portfolio-app" id="contact">
      <div className="email">
        <label for="email-address" class="form-label">
          email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email-address"
          placeholder="name@example.com"
        ></input>
      </div>

      <div className="message">
        <label for="email-body" class="form-label">
          message
        </label>
        <textarea className="form-control" id="email-body" rows="3"></textarea>
      </div>

      <div className="submit">
        <button
          className="btn btn-info text-light mt-2"
          id="email-submit"
          type="button"
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
      <div className="icons">
        <a href="https://github.com/bigcat86" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="mailto:attanner86@gmail.com" target="_blank"><i class="fa-solid fa-envelope"></i></a>
        <a href="https://www.linkedin.com/in/aaron-tanner-bigcat" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
      </div>
    </div>
  );
}
