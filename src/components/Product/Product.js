import "./product.css";
import "../App.css";

import React from "react";
import { Button } from "react-bootstrap";

export default function Product({ details }) {
  //   const [name, setName] = useState("");
  //   const [description, setDescription] = useState("");
  const addToCart = (e) => {
    console.log("add to cart handler");
  };

  return (
    <div className="product rounded shadow">
      <img className="product-img mt-2" src={details.imgUrl} alt="" />
      <div className="product-title">{details.name}</div>
      <div className="product-price">
        <span>Price: {details.price}</span>
      </div>
      <Button className="bg-info" onClick={addToCart}>
        Add To Cart
      </Button>
    </div>
  );

  // return (

  //   <div key={props.details.id} class="card" style={{ width: "18rem" }}>
  //     {/*<img
  //     class="card-img-top"
  //     src={props.details.imgUrl}
  //     alt={`product num. ${props.details.id}`}
  //   />*/}
  //     <div class="card-body">
  //       <h2 class="card-title">{props.details.name}</h2>
  //       <p class="card-text">{props.details.decription}</p>
  //     </div>
  //   </div>
  // );
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
