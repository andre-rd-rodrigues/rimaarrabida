import React, { useState } from "react";
import { Nav, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styles from "./nav.module.scss";
import AppButton from "components/AppButton/AppButton";
import AppIcon from "components/AppIcon/AppIcon";

const AppNavbar = () => {
  const [show, setShow] = useState(false);

  const iconSize = 22;

  const NewNav = () => (
    <div className={styles.container}>
      <Row className="align-items-center" style={{ margin: 0 }}>
        <Col sm={9} md={9} lg={10}>
          <nav className="navbar navbar-expand-lg" id={styles.horizontal}>
            <Link to="/" className="navbar-brand">
              <img src="/logo.png" alt="RIMA 2022" />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(true)}
            >
              <AppIcon icon="menu" />
            </button>
            <div
              className={`collapse navbar-collapse justify-content-center ${
                show && "show"
              }`}
              id="navbarSupportedContent"
            >
              <Nav.Link
                to="/#programa"
                as={HashLink}
                onClick={() => setShow(false)}
              >
                PROGRAMA
              </Nav.Link>
              <Nav.Link to="/edições" as={Link} onClick={() => setShow(false)}>
                EDIÇÕES
              </Nav.Link>
              <Nav.Link
                to="/#faqs"
                as={HashLink}
                onClick={() => setShow(false)}
              >
                FAQ
              </Nav.Link>
              <Nav.Link to="/sobre" as={Link} onClick={() => setShow(false)}>
                QUEM SOMOS
              </Nav.Link>
              <Nav.Link
                to="/trabalhos"
                as={Link}
                onClick={() => setShow(false)}
              >
                TRABALHOS
              </Nav.Link>
            </div>
          </nav>
        </Col>
        <Col sm={2} md={2} lg={2} className={styles.inscriçoes}>
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
