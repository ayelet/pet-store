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
            Furr Real is a category-defining health and wellness store focused
            on improving the lives of pets and pet parents.
          </p>
        </div>
      </Row>
    </div>
  );
}
