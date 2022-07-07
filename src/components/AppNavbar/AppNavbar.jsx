import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "assets/images/logo.png";
import styles from "./nav.module.scss";
import AppButton from "components/AppButton/AppButton";

const AppNavbar = () => {
  return (
    <Navbar expand="md" className={styles.nav}>
      <Navbar.Brand href="#home" as={Link}>
        <img src={logo} alt="RIMA 2022" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className="me-auto">
          <Nav.Link href="#home" as={Link}>
            PROGRAMA
          </Nav.Link>
          <Nav.Link href="#link" as={Link}>
            EDIÇÕES
          </Nav.Link>
          <Nav.Link href="#link" as={Link}>
            FAQ
          </Nav.Link>
          <Nav.Link href="#link" as={Link}>
            ORGANIZAÇÃO
          </Nav.Link>
          <Nav.Link href="#link" as={Link}>
            TRABALHOS
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <AppButton label="INSCRIÇÕES" />
    </Navbar>
  );
};

export default AppNavbar;
