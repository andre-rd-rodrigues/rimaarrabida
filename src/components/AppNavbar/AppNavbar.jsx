import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "assets/images/logo.png";
import styles from "./nav.module.scss";
import AppButton from "components/AppButton/AppButton";
import AppIcon from "components/AppIcon/AppIcon";

const AppNavbar = () => {
  const Horizontal = () => (
    <Navbar sticky="top" expand="md" className={styles.horizontal}>
      <Navbar.Brand to="/" as={Link}>
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
          <Nav.Link to="/about-us" as={Link}>
            QUEM SOMOS
          </Nav.Link>
          <Nav.Link to="/trabalhos" as={Link}>
            TRABALHOS
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <AppButton label="INSCRIÇÕES" />
    </Navbar>
  );
  const Vertical = () => (
    <div className={styles.vertical}>
      <a href="www.facebook.com">
        <AppIcon icon="facebook" size={25} color="aqua" />
      </a>

      <a href="www.instagram.com">
        <AppIcon icon="instagram" size={25} color="aqua" />
      </a>
    </div>
  );

  return (
    <>
      <Horizontal />
      <Vertical />
    </>
  );
};

export default AppNavbar;
