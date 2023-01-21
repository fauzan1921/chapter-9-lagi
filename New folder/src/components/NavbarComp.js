import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SButton from "./Button";
import { useAuth } from "./Context/auth";

function ColorSchemesExample() {
  const { user, signout } = useAuth();
  const handleSignOut = () => {
    signout();
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">BK-1</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/liderboard">Liderboard</Nav.Link>
          </Nav>
          {!user ? (
            <Nav>
              <Nav.Link href="/register">Register</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link href="/profile">{user?.email}</Nav.Link>
              <SButton action={handleSignOut} variant="light">
                Logout
              </SButton>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
