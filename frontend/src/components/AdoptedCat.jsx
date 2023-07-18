import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUpdateCatStatusMutation } from "../redux/slices/catApiSlice";
import Loading from "../components/Loading";

const AdoptedCat = ({ cat, afterUpdate }) => {
  const [updateCatStatus, { isLoading }] = useUpdateCatStatusMutation();
  const img = `/images/${cat.image}`;
  async function handleUpdate() {
    await updateCatStatus(cat.id);
    await afterUpdate();
  }
  return isLoading ? (
    <Loading />
  ) : (
    <Card className="my-3 p-3 rounded">
      <Card.Img src={img} variant="top" height={"400px"} />
      <Row>
        <Col sm={6}>
          <Link to={`/cat/${cat.id}`}></Link>
          <Card.Body>
            <Link to={`/cat/${cat.id}`}>
              <Card.Title as="h3">
                <strong>{cat.name}</strong>
              </Card.Title>
            </Link>

            <Card.Text as="h5">${cat.price}</Card.Text>

            <Link to={`/cat/${cat.id}`} className="me-0">
              <Button variant="primary">View Details</Button>
            </Link>
          </Card.Body>
        </Col>
        <Col sm={6} className="text-end my-2">
          <Card.Text variant="danger" as="h4" style={{ color: "brown" }}>
            Breed
          </Card.Text>
          <Card.Text as="p">{cat.Breed?.name}</Card.Text>
          <Button variant="warning" onClick={handleUpdate}>
            UnAdopt
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default AdoptedCat;
