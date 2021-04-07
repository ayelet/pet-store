import "./CartItem.css";

import React from "react";
import { Button, Card } from "react-bootstrap";

const CartItem = ({item}) => {
  return (
    <Card>
      <img src="" alt="" />
      <Card.Title>{item.name}</Card.Title>
      <div>
        <Button variant="primary" size="sm">
          -
        </Button>
        <span>{item.quantity}</span>
        <Button variant="primary" size="sm">
          +
        </Button>
      </div>
      <input type="button" className="btn-primary bg-theme" value="Remove" />
    </Card>
  );
};

export default CartItem;
