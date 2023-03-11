import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import useHttp from "../../hooks/use-https";
import { sendMessage } from "../../lib/firebaseService";
import contactImg from "../../assets/img/contact-img.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const formInitialDetails = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

export const Contact = () => {
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const { sendRequest, status, error } = useHttp(sendMessage);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  useEffect(() => {
    if (status === "completed" && !error) {
      setFormDetails(formInitialDetails);
    }
  }, [status, error, setFormDetails]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendRequest(formDetails);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) =>
                            onFormUpdate("lastName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        ></textarea>
                        <button type="submit">
                          <span>
                            {status === "pending" ? "Sending..." : "Send"}
                          </span>
                        </button>
                      </Col>
                      {status === "completed" && (
                        <Col>
                          <p className={error ? "danger" : "success"}>
                            {error ?? "Your message has been sent!"}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
