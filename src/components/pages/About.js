import React from "react";

export default function About() {
  return (
    <div class="container text-center" className="portfolio-app">
      <div class="row align-items-start">
        <div class="col" id="bio">
          <h2 class="bio">Bio</h2>
          <p class="text-start">
            Simply put, Aaron Tanner is a Renaissance man. Having graduated from
            the United States Naval Academy with a Bachelor of Science in
            Mechanical Engineering, he took to the skies as a Naval Aviator,
            piloting helicopters for over six years. As his service concluded,
            he found a new purpose within the realm of healthcare. Embracing his
            innate instinct to serve, he transitioned into an essential role as
            an ICU nurse, providing critical care.
            </p>
            <p>
            Aaron, however, has discovered another passion which he anticipates
            will engage him for life. This is the tech-intensive domain of
            software engineering and web development. Aaron approaches coding
            with a zeal and determination that surpasses even his time at the
            helm of an MH-60S helicopter or amidst the intensity of running a
            code blue in the ICU. He firmly believes in the transformative power
            of software and technology and is eager to dedicate his professional
            life to unraveling intricate coding challenges and crafting software
            that truly captivates users.
            </p>
            <p>
            That is the reason you find yourself here. You're here to catch a
            glimpse of the fervor Aaron harbors for development, to witness
            first-hand the commitment he has invested in mastering this craft in
            a relatively brief period. So, as a flyboy would say...let's kick
            the tires and light the fires!
          </p>
        </div>
        <div class="col" id="icons">
          <img src={require("../../images/python.png")} alt="python"></img>
          <img src={require("../../images/js.png")} alt="js"></img>
          <img src={require("../../images/reactjs.png")} alt="react"></img>
          <img src={require("../../images/express.png")} alt="express"></img>
          <img src={require("../../images/nodejs.png")} alt="node"></img>
          <img src={require("../../images/mongo.png")} alt="mongo"></img>
          <img src={require("../../images/html.png")} alt="html"></img>
          <img src={require("../../images/css.png")} alt="css"></img>       
          <img src={require("../../images/graphql.png")} alt="graph"></img>
          <img src={require("../../images/icons8-sql-100.png")} alt="sql"></img>
          <img src={require("../../images/github.png")} alt="git"></img>
          <img src={require("../../images/vscode.png")} alt="vs"></img>
        </div>
      </div>
    </div>
  );
}
