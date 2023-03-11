import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import headerImg from "../../assets/img/header-img.svg";
import { ArrowRightCircle, Download } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import staticData from "../../data/static";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [".Net Developer", "Front-End Developer"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  function downloadCVHandler() {
    // using Java Script method to get PDF file
    fetch("CV.pdf").then((response) => {
      response.blob().then((blob) => {
        // Create blob link to download
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "CV.pdf");

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
      });
    });
  }

  return (
    <BrowserRouter>
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>
                      {`Hi! I'm Harris `}
                      <span className="wrap">{text}</span>
                    </h1>
                    <p>{staticData.homeDescription}</p>
                    <div className="button-container">
                      <HashLink
                        to="#connect"
                        style={{ textDecoration: "none" }}
                      >
                        <button>
                          Let’s Connect <ArrowRightCircle size={25} />
                        </button>
                      </HashLink>
                      <button className="cv" onClick={downloadCVHandler}>
                        Download CV <Download size={25} />
                      </button>
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <img src={headerImg} alt="Header Img" />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </BrowserRouter>
  );
};
