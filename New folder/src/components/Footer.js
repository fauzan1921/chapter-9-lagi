import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="navbar-inverse fixed-bottom">
        {/* <Navbar bg="dark" variant="dark" className=""> */}
        <Container>
          <Nav className="me-auto  ">
            <Nav.Link href="#footer">
              &copy; {new Date().getFullYear()} Copyright: {"Binar Kelompok-1"}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
