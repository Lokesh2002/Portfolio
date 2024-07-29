import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import rit from "../../Assets/Projects/rit.jpeg";
import melos from "../../Assets/Projects/melos.jpg";
import fiserv from "../../Assets/Projects/fiserv.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong> and <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently. and the work experience.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px", } }>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Buisness Page"
              description="       A landing page for Tours and Travels website."
              ghLink="https://github.com/soumyajit4419/Chatify"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Portfolio"
              description="My personal blog page build with the help of html, css, react.js, node etc.. which is very attractive and explains about you very easily and clearly. "
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

                <Col md={5} className="project-card">
            <ProjectCard
              imgPath={fiserv}
              isBlog={false}
              title="Scripting Engineer @ fiserv."
              description="Working as an scripting engineer intern in the aggregation team in the Digital Payments department. Handling the client data very secure and contributing to team success."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={melos}
              isBlog={false}
              title="Web Developer @Melospiza"
              description="Worked as an web developer in this startup, Develops a frontend website where it has to be easy and understandable for the user to use the website "
  
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={melos}
              isBlog={false}
              title="Project Manager @Melospiza"
              description="Worked as an project manager in this startup, Created, communicated, and managed project plans & project timelines & Worked to continually meet the expectation of our clients"     
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={rit}
              isBlog={false}
              title="Department Co-ordinator @Entreprenurship Development Cell in RIT"
              description="Planned, developed, co-ordianted the students for developing their ideas as startup."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
