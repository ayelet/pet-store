// import { waitForDomChange } from "@testing-library/dom";
import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
const products = [
  {
    name: "PEDIGREE Adult Complete Nutrition",
    imgUrl:
      "https://images-na.ssl-images-amazon.com/images/I/91Z1i3zWcDL._AC_SL1500_.jpg",
    description:
      "This dry food recipe helps maintain a healthy lifestyle with antioxidants, vitamins, and minerals, in the delicious, meaty steak flavor dogs love",
    Brand: "Pedigree",
    Flavor: "Steak",
    Weight: 33,
    Form: "Dry",
    Age: "Adult",
    price: 26.67,
    category: "food",
    pet: "dog",
  },
  {
    name: "Purina ONE SmartBlend Natural Adult Dry Dog Food",
    imgUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81TKbHmedXL._AC_SL1500_.jpg",
    description:
      "This dry food recipe helps maintain a healthy lifestyle with antioxidants, vitamins, and minerals, in the delicious, meaty steak flavor dogs love",
    Brand: "Purina ONE",
    Flavor: "Chicken & Rice",
    Weight: 40,
    Form: "Dry",
    Age: "Adult",
    price: 24.99,
    category: "food",
    pet: "dog",
  },
  {
    name:
      "Blue Buffalo Life Protection Formula Natural Adult Small Breed Dry Dog Food",
    imgUrl:
      "https://images-na.ssl-images-amazon.com/images/I/817Hq08ZiKL._AC_SL1500_.jpg",
    description:
      "This dry food recipe helps maintain a healthy lifestyle with antioxidants, vitamins, and minerals, in the delicious, meaty steak flavor dogs love",
    Brand: "Blue Buffalo",
    Flavor: "Chicken & Brown Rice",
    Weight: 15,
    Form: "Dry",
    Age: "Adult",
    price: 24.99,
    category: "food",
    pet: "dog",
  },
];

export default function Products() {
  return (
    <div className="container">
      <h1>Product title</h1>
      <img src="" alt="product img" />
      <p>This is the best food your money can buy for dogs</p>
    </div>
  );
}

////
//  <Container>
//       <Row>
//         <Col>1 of 1</Col>
//       </Row>
//     </Container>
