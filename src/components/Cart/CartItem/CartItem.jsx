import "./Cart.css";

import React, { useState, useRef } from "react";
// import { Button, Card } from "react-bootstrap";

const CartItem = ({ item, changeQuantity, addToCart, removeFromCart }) => {
  const ref = useRef();
  const [quantity, setQuantity] = useState(item.qty);
  console.log(item);
  return (
    <tr>
      <td className="product-name">
        <a href="/#">{item.name}</a>
      </td>
      <td>{item.price}</td>

      <td class="product-quantity" data-title="Quantity">
        <div class="quantity buttons_added">
          <input
            type="button"
            value="-"
            class="minus button is-form"
            onClick={() => {
              if (ref.current.value >= 1) {
                ref.current.value--;
                setQuantity(ref.current.value);
                removeFromCart(item.id);
              }
            }}
          />

          <input
            type="number"
            id={item.id}
            class="input-text qty text"
            step="1"
            min="0"
            max=""
            name={item.name}
            value={quantity}
            title="Qty"
            size="4"
            placeholder=""
            inputmode="numeric"
            ref={ref}
            onChange={(e) => changeQuantity(item.id, e.target.value)}
          />
          <input
            type="button"
            value="+"
            class="plus button is-form"
            onClick={() => {
              ref.current.value++;
              setQuantity(ref.current.value);
              addToCart(item.id, item.price);
            }}
          />
        </div>
      </td>

      <td>{item.price * item.qty}</td>
    </tr>
  );
};

export default CartItem;
