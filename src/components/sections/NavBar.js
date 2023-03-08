import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import { Logo } from "../ui/Logo";
import linkedInIcon from "../../assets/img/linkedIn-icon.svg";
import githubIcon from "../../assets/img/github-icon.svg";
import instagramIcon from "../../assets/img/instagram-icon.svg";
import staticData from "../../data/static";

const sections = {
  home: "Home",
  skills: "Skills",
  projects: "Projects",
  work: "Work",
};

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const navLinks = Object.keys(sections).map((s) => {
    const link = sections[s];
    return (
      <Nav.Link
        href={"#" + s}
        className={activeLink === s ? "active navbar-link" : "navbar-link"}
        onClick={() => onUpdateActiveLink(s)}
        key={s}
      >
        {link}
      </Nav.Link>
    );
  });

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">{navLinks}</Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href={staticData.urls.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedInIcon} alt="" />
                </a>
                <a
                  href={staticData.urls.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="" />
                </a>
                <a
                  href={staticData.urls.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={instagramIcon} alt="" />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
