import React from "react";
import { Navbar, Nav, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "assets/images/logo.png";
import styles from "./nav.module.scss";
import AppButton from "components/AppButton/AppButton";
import AppIcon from "components/AppIcon/AppIcon";
import AppContainer from "components/AppContainer/AppContainer";

const AppNavbar = () => {
  const iconSize = 22;

  const Horizontal = () => (
    <div>
      <Navbar
        sticky="top"
        expand="lg"
        variant="default"
        className={styles.horizontal}
      >
        <Navbar.Brand to="/" as={Link}>
          <img src={logo} alt="RIMA 2022" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <AppIcon icon="menu" />
        </Navbar.Toggle>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            <Nav.Link to="/#programa" as={HashLink}>
              PROGRAMA
            </Nav.Link>
            <Nav.Link to="/edições" as={Link}>
              EDIÇÕES
            </Nav.Link>
            <Nav.Link to="/#faqs" as={HashLink}>
              FAQ
            </Nav.Link>
            <Nav.Link to="/sobre" as={Link}>
              QUEM SOMOS
            </Nav.Link>
            <Nav.Link to="/trabalhos" as={Link}>
              TRABALHOS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div id={styles.inscriçoes}>
          <AppButton label="INSCRIÇÕES" />
        </div>
      </Navbar>
    </div>
  );

  const NewNav = () => (
    <div>
      <Row>
        <Col sm={9} md={9} lg={10}>
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/">
              Navbar
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <AppIcon icon="menu" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <Nav.Link to="/#programa" as={HashLink}>
                PROGRAMA
              </Nav.Link>
              <Nav.Link to="/edições" as={Link}>
                EDIÇÕES
              </Nav.Link>
              <Nav.Link to="/#faqs" as={HashLink}>
                FAQ
              </Nav.Link>
              <Nav.Link to="/sobre" as={Link}>
                QUEM SOMOS
              </Nav.Link>
              <Nav.Link to="/trabalhos" as={Link}>
                TRABALHOS
              </Nav.Link>
            </div>
          </nav>
        </Col>
        <Col sm={2} md={2} lg={2}>
          <AppButton label="INSCRIÇÕES" />
        </Col>
      </Row>
    </div>
  );

  const Vertical = () => (
    <div className={styles.vertical}>
      <a href="www.facebook.com">
        <AppIcon icon="facebook" size={iconSize} color="aqua" />
      </a>

      <a href="www.instagram.com">
        <AppIcon icon="instagram" size={iconSize} color="aqua" />
      </a>
    </div>
  );

  return (
    <>
      <NewNav />
      <Vertical />
    </>
  );
};

export default AppNavbar;
