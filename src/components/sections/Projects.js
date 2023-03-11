import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../ui/ProjectCard";
import "animate.css";
import staticData from "../../data/static";
import mobileProjImg1 from "../../assets/img/mobile-proj1.png";
import webProjImg1 from "../../assets/img/web-proj1.png";
import webProjImg2 from "../../assets/img/web-proj2.png";

const ProjectTypes = { web: "Web", mobile: "Mobile", desktop: "Desktop" };

class Project {
  constructor(title, description, type, img, stack, repo) {
    this.title = title;
    this.description = description;
    this.type = type;
    this.img = img;
    this.stack = stack;
    this.repo = repo;
  }
}

const projects = [
  new Project(
    "My TODO App",
    "A Web app that allows the user to create and save to do lists",
    ProjectTypes.web,
    webProjImg1,
    "ReactJS",
    staticData.urls.github.repos.webApp
  ),
  new Project(
    "My Web App",
    "A Web app that allows the user to create and save to do lists",
    ProjectTypes.web,
    webProjImg2,
    "NextJS",
    staticData.urls.github.repos.webApp
  ),
  new Project(
    "The Boring Game",
    "A thrilling guess the number game",
    ProjectTypes.mobile,
    mobileProjImg1,
    "React Native",
    staticData.urls.github.repos.boringApp
  ),

  new Project(
    "MSc Project",
    "A Keepass2 Password Manager UI redisign in WPF",
    ProjectTypes.desktop,
    webProjImg1,
    "WPF, C#",
    staticData.urls.github.repos.MScProject
  ),
];

export const Projects = () => {
  const navItems = Object.keys(ProjectTypes).map((pt) => {
    const type = ProjectTypes[pt];
    return (
      <Nav.Item key={pt}>
        <Nav.Link eventKey={type}>{type}</Nav.Link>
      </Nav.Item>
    );
  });

  const panes = Object.keys(ProjectTypes).map((pt) => {
    const type = ProjectTypes[pt];
    return (
      <Tab.Pane eventKey={type} key={pt}>
        <Row>
          {projects
            .filter((p) => p.type === type)
            .map((project, index) => {
              return <ProjectCard key={index} {...project} />;
            })}
        </Row>
      </Tab.Pane>
    );
  });

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <p>{staticData.projectsDescription}</p>
              <Tab.Container
                id="projects-tabs"
                defaultActiveKey={ProjectTypes.web}
              >
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  {navItems}
                </Nav>
                <Tab.Content>{panes}</Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
