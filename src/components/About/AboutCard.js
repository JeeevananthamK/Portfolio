import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jeevanantham K </span>
            from <span className="purple"> Erode, Tamil Nadu, India.</span>
            <br />
            I am currently employed as a CSIRT at Coordinated Technologies FZE.
            <br />
            I have completed Information Technology in SKCT at Coimbatore.
            <br />
            <br />
            Apart from Cybersecurity, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> CTF 
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Everything is Vulnerable!"{" "}
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
