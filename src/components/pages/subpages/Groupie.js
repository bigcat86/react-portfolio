import React from "react";

export default function Groupie({ project, handleProjectChange }) {
  return (
    <div className="portfolio-project">
      <div className="btn-group w-100" role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={() => {
            handleProjectChange("Blog");
          }}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={() => {
            handleProjectChange("Crypt");
          }}
        >
          Next
        </button>
      </div>

      <div class="row align-items-start">
        <div class="col-9">
          <div className="project-img">
            <img
              src={require("../../../images/groupie-landing.png")}
              alt="groupie"
            ></img>
            <p className="port-text text-center mx-5">
              Groupie is a one-stop-shop for checking out your favotite bands
              and musical artists. Just enter the artist in the search bar, and
              you will get their next ten tour dates (which you can add
              individually to favorites), an extensive bio, their discography
              (modal), picture, and option to add them to favorites (star).
              <br></br>
              Groupie utilizes the data from four separate API's in order to
              give you the most up to date information on the given band or
              artist. it uses local storage to save all of your favorites and
              ensure your data persists. Groupie was a bootcamp group project
              that I personally took lead on. It is a work in progress, that I
              continue to optimize and develop.
            </p>
          </div>
        </div>
        <div class="col-3">
          <div class="card mx-3 mt-5 text-center">
            <img
              src={require("../../../images/avett-bros.png")}
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title">Groupie</h5>
              <p class="card-text">
                Groupie is a one-stop-shop for checking out your favotite bands
                and musical artists. Just enter the artist in the search bar,
                and you will get their next ten tour dates (which you can add
                individually to favorites), an extensive bio, their discography
                (modal), picture, and option to add them to favorites (star).
              </p>
              <a
                href="https://epipkl.github.io/Groupie/"
                target="_blank"
                class="btn btn-info"
                rel="noreferrer"
              >
                Go to Groupie
              </a>
            </div>         
          </div>
          <div className="card-icons">
                <img src={require("../../../images/js.png")} alt="js"></img>
                <img src={require("../../../images/html.png")} alt="html"></img>
                <img src={require("../../../images/css.png")} alt="css"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
