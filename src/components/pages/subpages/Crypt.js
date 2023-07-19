import React from "react";

export default function Crypt({ project, handleProjectChange }) {
  return (
    <div className="portfolio-project">
      <div className="btn-group w-100" role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={() => {
            handleProjectChange("Groupie");
          }}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={() => {
            handleProjectChange("Blog");
          }}
        >
          Next
        </button>
      </div>

      <div class="row align-items-start">
        <div class="col-9">
          <div className="project-img">
            <img
              src={require("../../../images/crypt-sign.png")}
              alt="groupie"
            ></img>
            <p className="port-text text-center mx-5">
              Crypt Keeper is a cryptocurrency portfolio simulator, and is a
              full-stack application. Buy and Sell the top ten crypto coins, and
              see how your porfolio can do over time (without risking real
              money). You can also get advice and forecast on your porfolio
              using our portfolioGPT feature! This app was built using
              JavaScript, node.js, express.js, handlebars, and SQL.
            </p>
          </div>
        </div>
        <div class="col-3">
          <div class="card mx-3 mt-5 text-center">
            <img
              src={require("../../../images/crypt-home.png")}
              class="card-img-top"
              alt="crypt"
            ></img>
            <div class="card-body">
              <h5 class="card-title">Crypt Keeper</h5>
              <p class="card-text">
                Crypt Keeper is a cryptocurrency portfolio simulator, and is a
                full-stack application. Buy and Sell the top ten crypto coins,
                and see how your porfolio can do over time (without risking real
                money).
              </p>
              <a
                href="https://crypt-keeper-project2.herokuapp.com/login"
                target="_blank"
                class="btn btn-info"
                rel="noreferrer"
              >
                Go to Crypt Keeper
              </a>
            </div>
          </div>
          <div className="card-icons" id="crypt-icons">
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
