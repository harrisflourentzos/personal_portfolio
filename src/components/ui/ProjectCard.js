import { Col } from "react-bootstrap";
import githubIcon from "../../assets/img/github-icon.svg";

export const ProjectCard = ({ title, description, img, stack, repo }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={img} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="social-icon">
            <a href={repo} target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="github-icon"></img>
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
