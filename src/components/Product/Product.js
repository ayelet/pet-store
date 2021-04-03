import "./product.css";
import React from "react";
import { Card } from "react-bootstrap";

export default function Product({ details }) {
  //   const [name, setName] = useState("");
  //   const [description, setDescription] = useState("");

  return (
    <Card className="h-100 shadow-sm bg-white rounded">
      <Card.Img variant="top" src={details.imgUrl} />
      <Card.Body className="d-flex flex-column">
        <div className="mb-2 d-flex justify-content-between">
          <Card.Title className="mb-0 font-weight-bold">
            {details.name}
          </Card.Title>
        </div>
      </Card.Body>
    </Card>
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
