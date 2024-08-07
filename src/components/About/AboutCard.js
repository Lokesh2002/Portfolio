import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Lokeshwer  </span>
            from <span className="purple"> Chennai, India.</span>
            <br />I am an entry-level software engineer who has just completed a B.E. in Computer Science Engineering.
            <br />
            Currently I am working as an intern in scripting engineer at fiserv and simultaneously learning and developing user interactive websites & web applications and also to be a software engineer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Stories for short films
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Loki</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
