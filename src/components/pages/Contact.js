import React from "react";

export default function Contact() {
  const handleClick = () => {
    const email = document.getElementById("validationDefault03");
    const message = document.getElementById("validationDefault04");
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (!regex.test(email.value) || !message.value) {
      alert("Please enter valid email, or write something for fucks sake");
    } else {
      alert("Thank you for your message!");
      email.value = "";
      message.value = "";
    }
  };

  return (
    <div className="portfolio-app" id="contact">
      <form className="row g-2">
        <div className="col-md-4 w-50">
          <label for="validationDefault01" class="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault01"
            required
          ></input>
        </div>
        <div className="col-md-4 w-50">
          <label for="validationDefault02" class="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault02"
            required
          ></input>
        </div>

        <div className="mb-2">
          <label for="validationDefault03" class="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="validationDefault03"
            placeholder="name@example.com"
            required
          ></input>
        </div>

        <div className="mb-2">
          <label for="validationDefault04" class="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="validationDefault04"
            placeholder="Write something interesting"
            required
          ></textarea>
        </div>

        <div className="col-12">
          <button
            className="btn btn-info text-light"
            type="submit"
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
      </form>

      <div className="icons">
        <a href="https://github.com/bigcat86" target="_blank" rel="noreferrer">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="mailto:attanner86@gmail.com" target="_blank" rel="noreferrer">
          <i class="fa-solid fa-envelope"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/aaron-tanner-bigcat"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}
