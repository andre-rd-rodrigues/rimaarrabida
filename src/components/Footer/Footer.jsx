import AppIcon from "components/AppIcon/AppIcon";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./footer.module.scss";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const links = [
    {
      label: "programa",
      link: "/#programa"
    },
    {
      label: "quem somos",
      link: "/sobre"
    },
    {
      label: "edições",
      link: "/edições"
    },
    {
      label: "trabalhos",
      link: "/trabalhos"
    },
    {
      label: "FAQ",
      link: "/#faqs"
    }
  ];

  return (
    <div className={styles.container}>
      <Row className="align-items-center">
        <Col>
          <div className={styles.links}>
            <ul>
              {links.map(({ link, label }) => (
                <li>
                  <Link to={link} as={HashLink}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col className={styles.contact}>
          <div className={styles.contacto}>
            <p>Contacto</p>
            <div>
              <AppIcon icon="mail" size={15} color="white" />
              <a href="rima@snspt.onmicrosoft.com">
                rima@snspt.onmicrosoft.com
              </a>
            </div>
          </div>
        </Col>
        <Col>
          <div className={styles.logo}>
            <img src="%PUBLIC_URL%/logo.png" alt="RIMA 2022" />
            <p>II RIMA | 2022</p>
            <div>
              <a href="www.facebook.com">
                <AppIcon icon="facebook" size={15} color="white" />
              </a>
              <a href="www.instagram.com">
                <AppIcon icon="instagram" size={15} color="white" />
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <p className={styles.copywrite}>
        Copyright © 2022 by{" "}
        <a href=" https://andre-rd-rodrigues.github.io/portfolio" target="_">
          André Rodrigues
        </a>
        . All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
