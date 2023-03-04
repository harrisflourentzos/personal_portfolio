import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import linkedInIcon from "../assets/img/linkedIn-icon.svg";
import githubIcon from "../assets/img/github-icon.svg";
import instagramIcon from "../assets/img/instagram-icon.svg";
import staticData from "../data/static";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href={staticData.urls.linkedIn}>
                <img src={linkedInIcon} alt="Icon" />
              </a>
              <a href={staticData.urls.github}>
                <img src={githubIcon} alt="Icon" />
              </a>
              <a href={staticData.urls.instagram}>
                <img src={instagramIcon} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
