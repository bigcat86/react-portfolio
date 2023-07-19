import React from "react";

export default function Blog({ project, handleProjectChange }) {
  return (
    <div className="portfolio-project">
      <div className="btn-group w-100" role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={() => {
            handleProjectChange("Crypt");
          }}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={() => {
            handleProjectChange("Groupie");
          }}
        >
          Next
        </button>
      </div>

      <div class="row align-items-start">
        <div class="col-9">
          <div className="project-img">
            <img
              src={require("../../../images/blog-dash.png")}
              alt="groupie"
            ></img>
            <p className="port-text text-center mx-5">
              Tech.Blog is, as you would imagine, a tech blog where you can
              add/delete posts and make comments. This is a full-stack
              application and was built using JavaScript, node.js, express.js,
              handlebars, and SQL.
            </p>
          </div>
        </div>
        <div class="col-3">
          <div class="card mx-3 mt-5 text-center">
            <img
              src={require("../../../images/blog-logo.png")}
              class="card-img-top"
              alt="blog"
            ></img>
            <div class="card-body">
              <h5 class="card-title">Tech.Blog</h5>
              <p class="card-text">
                Tech.Blog is, as you would imagine, a tech blog where you can
                add/delete posts and make comments. This is a full-stack
                application and was built using JavaScript, node.js, express.js,
                handlebars, and SQL.
              </p>
              <a
                href="https://tech-blog-86-1d47c4a087ed.herokuapp.com/"
                target="_blank"
                class="btn btn-info"
                rel="noreferrer"
              >
                Go to Tech.Blog
              </a>
            </div>
          </div>
          <div className="card-icons" id="blog-icons">
            <img src={require("../../../images/js.png")} alt="js"></img>
            <img src={require("../../../images/html.png")} alt="html"></img>
            <img src={require("../../../images/css.png")} alt="css"></img>
            <img src={require("../../../images/express.png")} className="bg-light" alt="express"></img>
            <img src={require("../../../images/nodejs.png")} className="bg-light" alt="node"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
