import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Toast from "react-bootstrap/Toast";
function Hello(props) {
  const [showHello, setShowHello] = useState(false);
  console.log("Hello component rendered with props:", props);
  const [count, setCount] = useState(0);

  const { buttonText, message } = props;
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Button
              variant="primary"
              onClick={() => {
                setCount(count + 1);
                console.log(`Button clicked ${count + 1} times`);
                setShowHello(!showHello);
              }}
            >
              {buttonText} <Badge bg="secondary">{count}</Badge>
            </Button>
          </Col>
          <Col>
            <Toast>
              <Toast.Body>
                <span>
                  <p
                    id="hello"
                    style={{ display: showHello ? "block" : "none" }}
                  >
                    {message}
                  </p>
                </span>
              </Toast.Body>
            </Toast>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Hello;
