import { Container, Row, Col, Button } from "react-bootstrap";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { useHistory } from "react-router-dom";

export function Footer() {
  const history = useHistory();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col style={{ margin: "20px", padding: "10px" }}>
            <span className="animalShelterFooter">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmS9rpMkFQA2hQ2nEzJhaW4zmhb90ZJBwGTw&usqp=CAU"
                alt="Canvas Logo"
                className="footer-image2"
              />
              <h6>ANIMAL SHELTER</h6>
            </span>
            <p className="footerP">
              One of the best Animal Shelter places in India. We are recognised
              by the Government. Please take pledge to protect this lovely pets
              !
            </p>
            <Button
              variant="danger"
              onClick={() => history.push("/adopt")}
              className="adoptButtonFooter"
            >
              Adopt->
            </Button>{" "}
          </Col>

          <Col style={{ margin: "20px", padding: "10px" }}>
            <span>
              <h6>GET IN TOUCH</h6>
            </span>
            <p className="footerP">
              {" "}
              <span>
                <CiLocationOn />
              </span>{" "}
              11/1 Shramik Nagar, Behind Rohan Garima, Senapati Bapat Road,
              ShivajiNagar, Pune 411016{" "}
            </p>
            <p>
              {" "}
              <span>
                <AiOutlineMail />
              </span>{" "}
              jawalejayesh123@gmail.com{" "}
            </p>
            <span>
              <p> FOLLOW US </p>
            </span>
            <div className="spanButtons">
              <AiOutlineTwitter /> <BsFacebook /> <AiFillLinkedin />{" "}
            </div>
          </Col>

          <Col style={{ margin: "20px", padding: "10px" }}>
            <span>
              <h6>QUICK LINKS</h6>
            </span>
            <p className="footerP">Home</p>
            <p className="footerP">Contact us</p>
          </Col>
        </Row>

        <Row>
          <span>
            <hr />
          </span>
          <Col>
            <p className="copyright">Copyright @2023, Animal Shelter</p>
          </Col>
          <Col style={{ display: "flex", gap: "20px", maxWidth: "400px" }}>
            <p className="footerP">Privacy Policy</p>
            <p className="footerP">Terms of Service</p>
            <p className="footerP">Cookie Settings</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
