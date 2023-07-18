import { Row, Col } from "react-bootstrap";
import {
  useGetAllCatsQuery,
} from "../redux/slices/catApiSlice";
import Cat from "../components/Cat";
import Loading from "../components/Loading";

const HomeScreen = () => {
  const { data: cats, isLoading, error, refetch } = useGetAllCatsQuery();
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <h1>Error</h1>
      ) : (
        <>
          <h1>Home</h1>
          <Row>
            {cats.map((cat) => {
              return (
                <Col key={cat.id} sm={12} md={6} lg={4}>
                  <Cat cat={cat} afterUpdate={refetch} />
                </Col>
              );
            })}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
