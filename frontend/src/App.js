import { Container } from "react-bootstrap";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";

const App = () => {
  const location = useLocation();
  console.log(location.pathname);
  // Array of routes where the Header should not be displayed

  // Function to check if the current route matches any of the excluded routes
  const shouldDisplayHeader = () => {
    return location.pathname === "/"
      ? false
      : location.pathname === "/cat/add"
      ? false
      : true;
  };

  return (
    <>
      {shouldDisplayHeader() && <Header />}

      <main className="py-5">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
