import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

interface INavBarUser {
  Name: string;
}

const NavBar: React.FC<INavBarUser> = (props) => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Food Watcher
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {props.Name && props.Name.length > 0 ? (
            <Navbar.Text>Hello {props.Name}</Navbar.Text>
          ) : (
            <Navbar.Brand as={Link} to="/login">
              Login
            </Navbar.Brand>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
