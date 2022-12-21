import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useHistory } from "react-router-dom";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; // To access whole global state
import { getPet } from "../actions/getPetAction";

export function GetPetByTypeCat() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pets } = useSelector((state) => state.getPet);

  useEffect(() => {
    dispatch(getPet());
  }, [dispatch]);

  return (
    <Container style={{ marginTop: "30px" }}>
      <Row>
        <Col>
          <h2>What all pets do we have ?</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            style={{ color: "black" }}
            onClick={() => history.push("/pets-we-have/dog")}
            variant="link"
          >
            DOGS
          </Button>
          |
          <Button
            onClick={() => history.push("/pets-we-have/cat")}
            variant="link"
          >
            CATS
          </Button>
        </Col>
      </Row>
      <Row>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Breed</th>
              <th>Age (months)</th>
            </tr>
          </thead>
          <tbody>
            {pets
              .filter((pet) => {
                return pet.petType === "Cat";
              })
              .map((row) => (
                <tr key={row._id}>
                  <td>{row.name}</td>
                  <td>{row.breed}</td>
                  <td>{row.age}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}
