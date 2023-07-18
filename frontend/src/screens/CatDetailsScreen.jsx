import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Card, Image } from "react-bootstrap";
import { useGetCatDetailsQuery } from "../redux/slices/catApiSlice";
import Loading from "../components/Loading";

const CatDetailsScreen = () => {
  const { id: catId } = useParams();

  const { data: cat, isLoading, error } = useGetCatDetailsQuery(catId);
  let img;
  if (cat) {
    img = `/images/${cat.image}`;
  }
  return (
    <>
      <Link className="btn btn-light my-3" to="/home">
        Go Back
      </Link>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <h1>Error</h1>
      ) : (
        <>
          <Row key={cat.id}>
            <Col md={6}>
              <Image src={img} alt={cat.name} height={"500px"} fluid rounded />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{cat.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>Price: ${cat.price}</ListGroup.Item>
                <ListGroup.Item>Description: {cat.description}</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Breed:</Col>
                      <Col>
                        <strong>{cat.Breed?.name}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Adoption Status:</Col>
                      <Col>
                        <strong>
                          {cat.is_adopted ? "Adopted" : "Available"}
                        </strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default CatDetailsScreen;
