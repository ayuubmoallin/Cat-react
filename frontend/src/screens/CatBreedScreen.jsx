import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useGetAllCatsWithBreedQuery } from "../redux/slices/catApiSlice";
import Cat from "../components/Cat";
import Loading from "../components/Loading";

const CatBreedScreen = () => {
  const { name: breed } = useParams();
  const {
    data: cats,
    isLoading,
    error,
    refetch,
  } = useGetAllCatsWithBreedQuery(breed);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <h1>Error</h1>
      ) : (
        <>
          <h1>{breed}</h1>
          <Row>
            {cats.map((cat) => (
              <Col key={cat.id} sm={12} md={6} lg={4}>
                <Cat cat={cat} afterUpdate={refetch} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default CatBreedScreen;
