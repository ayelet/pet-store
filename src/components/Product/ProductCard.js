import "./product.css";
import "../App.css";

import React, { useState } from "react";
import { Button } from "react-bootstrap";
// import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

export default function ProductCard({ details }) {
  // const [cart] = useContext(CartContext);
  const [cart, setCart] = useState([]);
  //   const [name, setName] = useState("");
  //   const [description, setDescription] = useState("");
  // <CartContext.Consumer>
  //   {" "}
  //   {(value) => {
  const addToCart = (productId) => {
    // console.log("add to cart handler", cart);
    setCart([...cart, productId]);
    console.log(cart);
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
        <Button className="bg-info" onClick={() => addToCart(details.id)}>
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
