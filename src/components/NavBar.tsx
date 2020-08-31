import React from "react";
import { Navbar, Nav } from "react-bootstrap";

interface INavBarUser {
  Name: string;
}

const NavBar: React.FC<INavBarUser> = (props) => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">Food Watcher</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        {props.Name && props.Name.length > 0 ? (
          <Navbar.Text>Hello {props.Name}</Navbar.Text>
        ) : (
          <Nav.Link href="#link">Login</Nav.Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
