import { Row, Col } from "react-bootstrap";
import { useGetAllAdoptedCatsQuery } from "../redux/slices/catApiSlice";
import Loading from "../components/Loading";
import AdoptedCat from "../components/AdoptedCat";

const AdoptedCatsScreen = () => {
  const { data: cats, isLoading, error, refetch } = useGetAllAdoptedCatsQuery();
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <h1>Error</h1>
      ) : (
        <>
          <h1>Adopted Cats</h1>
          <Row>
            {cats.map((cat) => {
              return (
                <Col key={cat.id} sm={12} md={6} lg={4}>
                  <AdoptedCat cat={cat} afterUpdate={refetch} />
                </Col>
              );
            })}
          </Row>
        </>
      )}
    </>
  );
};

export default AdoptedCatsScreen;
