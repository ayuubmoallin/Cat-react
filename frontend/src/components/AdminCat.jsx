import { Card, Button, Row, Col, Text } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  useDeleteCatMutation,
  useUpdateCatStatusMutation,
} from "../redux/slices/catApiSlice";
import Loading from "../components/Loading";
import { FaTrash } from "react-icons/fa";

const AdminCat = ({ cat, afterUpdate }) => {
  const [deleteCat, { isLoading }] = useDeleteCatMutation();
  const [updateCatStatus, { isUpdating }] = useUpdateCatStatusMutation();

  const img = `/images/${cat.image}`;
  async function handleDelete() {
    await deleteCat(cat.id);
    await afterUpdate();
  }

  async function handleUpdate() {
    await updateCatStatus(cat.id);
    await afterUpdate();
  }
  return isLoading || isUpdating ? (
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
          <Button
            className="me-3"
            variant={cat.is_adopted ? "warning" : "success"}
            onClick={handleUpdate}
          >
            {cat.is_adopted ? "UnAdopt" : "Adopt"}
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            <FaTrash />
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default AdminCat;
