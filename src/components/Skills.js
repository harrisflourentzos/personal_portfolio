import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import csharpIcon from "../assets/img/csharp-icon.svg";
import dotNetIcon from "../assets/img/dotNet-icon.png";
import htmlIcon from "../assets/img/html5-icon.svg";
import cssIcon from "../assets/img/css-icon.svg";
import reactIcon from "../assets/img/react-icon.svg";
import tsIcon from "../assets/img/ts-icon.svg";
import jsIcon from "../assets/img/js-icon.svg";
import rxIcon from "../assets/img/reactive-extensions-icon.svg";
import staticData from "../data/static";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

class Skill {
  constructor(name, experienceType, experienceDuration, icon) {
    this.name = name;
    this.experienceType = experienceType;
    this.experienceDuration = experienceDuration;
    this.icon = icon;
  }
}

const skills = [
  new Skill("C#", "Commercial", 3, csharpIcon),
  new Skill(".NET Core", "Commercial", 2, dotNetIcon),
  new Skill("RX", "Commercial", 2, rxIcon),
  new Skill("ReactJS", "Personal Projects", 1, reactIcon),
  new Skill("HTML", "Personal Projects", 1, htmlIcon),
  new Skill("CSS", "Personal Projects", 1, cssIcon),
  new Skill("JavaScript", "Personal Projects", 1, jsIcon),
  new Skill("TypeScript", "Personal Projects", 1, tsIcon),
];

export const Skills = () => {
  const skillsElements = skills.map((item) => {
    return (
      <div className="item" key={item.name}>
        <img src={item.icon} alt={item.name} />
        <h4>{item.name}</h4>
        <h5>{"Years: " + item.experienceDuration}</h5>
        <h5>{"Experience: " + item.experienceType}</h5>
      </div>
    );
  });

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>{staticData.skillsDescription}</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skillsElements}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
