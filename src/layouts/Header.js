import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useHistory } from "react-router-dom";

import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

import "bootstrap/dist/css/bootstrap.min.css";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>;

export function Header() {
  const history = useHistory();
  return (
    <div>
      <Navbar bg="" expand="lg">
        <Container>
          <img
            src="https://thumbs.dreamstime.com/b/animal-shelter-icon-white-background-simple-element-illustration-charity-concept-sign-symbol-design-141333388.jpg"
            alt="Canvas Logo"
            width="50"
            height="50"
          />
          <Navbar.Brand href="#home" style={{ marginLeft: "10px" }}>
            ANIMAL SHELTER
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ marginLeft: "30%" }}>
              <Nav.Link onClick={() => history.push("/")}>Home</Nav.Link>
              <Nav.Link href="#link">Contact Us</Nav.Link>
            </Nav>

            <Nav style={{ marginLeft: "30%" }}>
              <Nav.Link href="#home">
                <AiFillLinkedin />
              </Nav.Link>
              <Nav.Link href="#link">
                <AiOutlineTwitter />
              </Nav.Link>
              <Nav.Link href="#link">
                <AiFillInstagram />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
