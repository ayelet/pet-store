import "./product.css";
import "../App.css";
import Cart from "../Cart/CartDB";

import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProductCard({ details, onAdd, onRemove }) {
  const [cart, setCart] = useState(Cart);
  console.log("Prodcutc card: ", cart);
  // const [cart, setCart] = useState([]);
  //   const [name, setName] = useState("");
  //   const [description, setDescription] = useState("");
  // <CartContext.Consumer>
  //   {" "}
  //   {(value) => {
  const addToCart = (id, price) => {
    cart.add(id, price);
    console.log(id, price);
    // console.log("add to cart handler", cart);
    // setCart([...cart, productId]);
    setCart(cart);
  };

  return (
    <div className="product rounded shadow">
      <Link
        style={{ textDecoration: "none" }}
        to={`/Products/id=${details.id}`}
      >
        <img className="product-img mt-2" src={details.imgUrl} alt="" />
        <div className="product-title">{details.name}</div>
        <div className="product-price">
          <span>Price: ${details.Price}</span>
        </div>
        <Button
          className="bg-info"
          onClick={() => addToCart(details.id, details.price)}
        >
          Add To Cart
        </Button>
      </Link>
    </div>
  );
  //   }}
  // </CartContext.Consumer>;
}

// <Card bg="info" className="h-50 shadow-sm bg-white rounded">
//   <Card.Img className="w-60" variant="top" src={details.imgUrl} />
//   {/*<Card.Img className="h-100 w-90 m-2" variant="top" src={details.imgUrl} />*/}
//   <Card.Body className="d-flex flex-column">
//     <div className="mb-2 d-flex justify-content-between">
//       <Card.Title className="mb-0 font-weight-bold">
//         {details.name}
//       </Card.Title>
//     </div>
//     <Button onClick={addToCart}>Add To Cart</Button>
//   </Card.Body>
// </Card>
