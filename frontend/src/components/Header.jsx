import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaCat } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Welcome to Cat Adoption Centre</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cats/adopted">
                <Nav.Link>View Adopted Cats</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Category" id="basic-nav-dropdown">
                <NavDropdown.Item
                  onClick={() => navigate(`/cats/breed/Persian`)}
                >
                  Persian
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => navigate(`/cats/breed/Siamese`)}
                >
                  Siamese
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => navigate(`/cats/breed/Burese`)}
                >
                  Burese
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => navigate(`/cats/breed/Scottish`)}
                >
                  Scottish
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => navigate(`/cats/breed/ShortHair`)}
                >
                  ShortHair
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate(`/home`)}>
                  All
                </NavDropdown.Item>
              </NavDropdown>
              <LinkContainer to="/cat/add">
                <Nav.Link>
                  Add a new <FaCat />
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
