import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import mthreeLogo from "../../assets/img/mthree-logo.png";
import natwestLogo from "../../assets/img/natwest-logo.png";

class WorkExperience {
  constructor(
    companyName,
    companyLogo,
    jobTitle,
    stack,
    duration,
    description
  ) {
    this.companyName = companyName;
    this.companyLogo = companyLogo;
    this.jobTitle = jobTitle;
    this.stack = stack;
    this.duration = duration;
    this.description = description;
  }
}

const workExperiences = [
  new WorkExperience(
    "NatWest Markets",
    natwestLogo,
    "Front-End Software Developer",
    "C#/.NET Core, SQL, ASP.NET Core, WPF, RX",
    "May 2019 - February 2022",
    ""
  ),
  new WorkExperience(
    "MThree Consultants",
    mthreeLogo,
    "Alumni Trainee",
    "C#, Git",
    "Mar 2019 - May 2019",
    ""
  ),
];

const workExperiencesElements = workExperiences.map((we) => {
  return (
    <Row className="align-items-center" key={we.companyName}>
      <Col>
        <h5>[{we.duration}]</h5>
      </Col>
      <Col>
        <div className="work-item-row">
          <img src={we.companyLogo} alt={we.companyName}></img>
          <h3>{we.companyName}</h3>
          <h5>{we.jobTitle}</h5>
        </div>
      </Col>
      <Col>
        <h5>{we.stack}</h5>
      </Col>
    </Row>
  );
});

export const Work = () => {
  return (
    <section className="work" id="work">
      <div className="work-bx container">
        <h2>Work Experience</h2>
        <Container>{workExperiencesElements}</Container>
      </div>
    </section>
  );
};
