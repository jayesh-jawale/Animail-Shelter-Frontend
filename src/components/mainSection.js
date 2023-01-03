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
              We all love animals, don't we? Animal shelters have played a vital
              role in helping out our friends in distress. The next time you see
              any animal injured, abused or neglected, feel free to contact
              animal shelters.
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
              Our rescues, admissions, and treatment get listed on our Social
              media pages on a DAILY BASIS. From 2018 end, we provided FREE
              treatment to almost 8000 admitted dogs till now. From 2021 we
              started admitting birds, mainly because there was a huge scarcity
              of aviary in Pune and many city birds lost their lives.
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
              Yes, you heard it right! We are probably the only facility in Pune
              which is entirely cage-free. We built almost 60ft×25 ft airy
              kennels where similar natured animals are kept together. They get
              their freedom too which reduces the stress of being sick & not in
              their territory considerably.
            </p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
