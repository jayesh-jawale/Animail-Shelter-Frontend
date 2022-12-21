import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

export function MainSection() {
  const history = useHistory();

  return (
    <React.Fragment>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col style={{ float: "left" }}>
            <h4>Welcome to Animal Shelter !</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.
            </p>
          </Col>
          <Col>
            <img
              // src="https://cdn-icons-png.flaticon.com/512/202/202719.png"
              src="https://thumbs.dreamstime.com/b/cat-dog-26409253.jpg"
              alt="Canvas Logo"
              className="image1"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Button
              variant="danger"
              className="adoptButton"
              onClick={() => history.push("/adopt")}
            >
              Adopt
            </Button>{" "}
            <Button
              variant="light"
              className="whatAllPets"
              onClick={() => history.push("/pets-we-have")}
            >
              What all pets do we have ?
            </Button>{" "}
          </Col>
        </Row>

        <Row style={{ marginTop: "40px" }}>
          <Col>
            <h4 className="textRight">
              We do take in pets if you can't take care of them !
            </h4>
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="paraRight">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button
              variant="light"
              className="giveAwayButton"
              onClick={() => history.push("/give-away")}
            >
              Give Away
            </Button>{" "}
          </Col>
        </Row>

        <Row>
          <Col>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmS9rpMkFQA2hQ2nEzJhaW4zmhb90ZJBwGTw&usqp=CAU"
              alt="Canvas Logo"
              className="image2"
            />
          </Col>
          <Col>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.
            </p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
