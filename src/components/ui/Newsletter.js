import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import useHttp from "../../hooks/use-https";
import { addSubscriber } from "../../lib/firebaseService";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { sendRequest, status, error } = useHttp(addSubscriber);

  const clearFields = () => {
    setEmail("");
  };

  useEffect(() => {
    if (status === "completed" && !error) clearFields();
  }, [status, error]);

  function handleSubmit(e) {
    e.preventDefault();
    sendRequest(email);
  }

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to our Newsletter<br></br> & Never miss latest updates
            </h3>
            {status === "pending" && <Alert>Sending...</Alert>}
            {status === "completed" && error && (
              <Alert variant="danger">{error}</Alert>
            )}
            {status === "completed" && !error && (
              <Alert variant="success">{"Thank you for subscribing!"}</Alert>
            )}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
