import { useState } from "react";

import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import { FaCat } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCreateCatMutation } from "../redux/slices/catApiSlice";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

const CreateCatScreen = () => {
  const navigate = useNavigate();
  const [createCat, { isLoading, isError }] = useCreateCatMutation();

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [breed, setBreed] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(100);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!breed.length) return alert("Please select cat's breed");

    await createCat({
      name,
      age: Number.parseInt(age),
      breed_id: Number.parseInt(breed),
      description,
      price: Number.parseInt(price),
    });

    if (!isError) navigate("/home");
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2>
            Add a new cat <FaCat />
          </h2>
          <Link className="btn btn-dark my-3" to="/home">
            Go Back
          </Link>
          {isLoading ? (
            <Loading />
          ) : (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName" className="my-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter cat's name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Label>Price</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">$</InputGroup.Text>

                <Form.Control
                  type="number"
                  placeholder="Enter cat's price"
                  aria-label="price"
                  aria-describedby="basic-addon1"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </InputGroup>

              <Form.Group controlId="formAge" className="my-3">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Enter cat's age"
                  onChange={(e) => setAge(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBreed" className="my-3">
                <Form.Label>Breed</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => setBreed(e.target.value)}
                >
                  <option value="">Select breed</option>
                  <option value="1">Persian</option>
                  <option value="2">Siamese</option>
                  <option value="3">Burese</option>
                  <option value="4">Scottish</option>
                  <option value="5">ShortHair</option>
                </Form.Control>
              </Form.Group>

              <Form.Group
                controlId="formDescription"
                className="my-3"
                onChange={(e) => setDescription(e.target.value)}
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows={3}
                  placeholder="Enter cat's description"
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button className="mt-3" variant="success" type="submit">
                  Create
                </Button>
              </div>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CreateCatScreen;
