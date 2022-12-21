import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adoptPet } from "../actions/adoptPetAction";
import { getPet } from "../actions/getPetAction";

export function AdoptForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { pets } = useSelector((state) => state.getPet);

  useEffect(() => {
    dispatch(getPet());
  }, [dispatch]);

  const [petType, setPetType] = useState("");
  const [breed, setBreed] = useState("");
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const adoptPetData = {
      petType,
      breed,
      fullName,
      email,
      phone,
    };

    dispatch(adoptPet(adoptPetData));
    alert("Requested for adoption");
    history.push("/");
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2 style={{ marginBottom: "15px", marginTop: "15px" }}>Adopt a pet</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4 style={{ marginBottom: "15px" }}>
            What pet do you want to adopt ?
          </h4>
        </Col>
      </Row>
      <Form className="formClass">
        <Row>
          <Col>
            Pet type:
            <Form.Select onChange={(e) => setPetType(e.target.value)} required>
              <option>--Select Pet--</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: "15px" }}>
            Breed:
            <Form.Select onChange={(e) => setBreed(e.target.value)} required>
              <option>--Select Breed--</option>
              {pets
                .filter((pet) => {
                  return pet.petType === petType;
                })
                .map((petBreed) => (
                  <option key={petBreed._id} value={petBreed.breed} required>
                    {petBreed.breed}
                  </option>
                ))}
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 style={{ marginTop: "30px" }}>Please fill in details</h4>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            type="text"
            value={fullName}
            onChange={(e) => setFullname(e.target.value)}
            placeholder="Full Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            required
          />
        </Form.Group>
      </Form>
      <Button
        onClick={handleSubmit}
        variant="danger"
        type="submit"
        className="requestAdoptionButton"
      >
        REQUEST FOR ADOPTION
      </Button>
    </Container>
  );
}
