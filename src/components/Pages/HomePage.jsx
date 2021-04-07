import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <Jumbotron className="hero" fluid>
      <Container>
        <h1>Furr Real</h1>
        <p>We Care For Your Pet's Health</p>
      </Container>
    </Jumbotron>
  );
};

export default HomePage;
