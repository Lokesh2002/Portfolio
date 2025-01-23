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
            <br />I am an entry-level software engineer with a B.E. in Computer Science & Engineering.
            <br />
             I recently completed an internship as a Scripting Engineer at Fiserv, where I gained valuable hands-on experience in scripting and web development.

Alongside my internship, I have been focusing on learning and developing interactive products, honing my skills in creating innovative and user-centric solutions. My goal is to continue improving my technical expertise and evolve as a software engineer, with a strong emphasis on building scalable and efficient products.

I’m always eager to explore new technologies and challenges that will help me grow as a developer and contribute meaningfully to any project I work on.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Movies and Documentaries
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
