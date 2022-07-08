import React from "react";
import { Container } from "react-bootstrap";

function AppContainer({ children }) {
  return (
    <Container>
      <div
        style={{
          margin: "0 20px"
        }}
      >
        {children}
      </div>
    </Container>
  );
}

export default AppContainer;
