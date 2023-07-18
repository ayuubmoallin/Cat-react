import { Row, Col } from "react-bootstrap";
import { useGetAllCatsQuery } from "../redux/slices/catApiSlice";
import Loading from "../components/Loading";
import AdminCat from "../components/AdminCat";

const AdminScreen = () => {
  const { data: cats, isLoading, error, refetch } = useGetAllCatsQuery();
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <h1>Error</h1>
      ) : (
        <>
          <h1>Admin Portal</h1>
          <Row>
            {cats.map((cat) => {
              return (
                <Col key={cat.id} sm={12} md={6} lg={4}>
                  <AdminCat cat={cat} afterUpdate={refetch} />
                </Col>
              );
            })}
          </Row>
        </>
      )}
    </>
  );
};

export default AdminScreen;
