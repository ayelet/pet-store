import React from "react";
// import HeroPage from "../HeroPage/HeroPage";
// import Layout from "../Layout/Layout";
import "../Layout/Layout.css";
import "./About.css";
// import AboutImg from "../../assets/img/about.webp";
import { Row } from "react-bootstrap";

export default function AboutPage() {
  return (
    <div>
      <Row className="about">
        <div className="about--img col-md-6"></div>
        <div className="about--info col-md-6 product-detail-card-text">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            aspernatur culpa repellendus aut aliquam, consectetur laborum
            consequuntur earum? Mollitia tempore omnis beatae vero eveniet harum
            perferendis aliquid laudantium nulla soluta odit alias iusto ipsa
            non, natus fugit est atque. Sed corrupti, velit esse ratione facere
            aperiam rem assumenda beatae autem?
          </p>
        </div>
      </Row>
    </div>
  );
}
