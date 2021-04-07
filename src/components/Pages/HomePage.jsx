import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Jumbotron className="hero" fluid>
      <Container>
        <h1>Furr Real</h1>
        <p>We Care For Your Pet's Health</p>
        <Link to="/Products">
          <Button variant="info">Start Shopping</Button>{" "}
        </Link>
        <Link to="/Calculator">
          <Button variant="info">Nutrition Calculator</Button>
        </Link>
      </Container>
    </Jumbotron>
  );
};

export default HomePage;
