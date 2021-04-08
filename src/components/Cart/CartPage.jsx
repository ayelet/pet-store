import React, { useState, useEffect } from "react";
// import { useContext } from "react";
// import { CartContext } from "../CartContext/CartContext";
import Cart from "./Cart";
import CartItem from "./CartItem/CartItem";

export default function CartPage() {
  //   const cartContext = useContext(CartContext);
  const [cart, setCart] = useState(Cart);
  const [totalPrice, setTotal] = useState(0);

  //   const totalPrice = 0;
  //   console.log(totalPrice);
  //   console.log(cart.getCart());

  const changeQuantity = (id, qty) => {
    console.log("cart: before update:", cart);
    cart.update(id, qty);
    console.log("cart: aftr update:", cart);

    setCart(cart);

    console.log("changing qty", id, qty);
  };

  const addToCart = (id, price) => {
    cart.add(id, price);
    setCart(cart);
    setTotal(cart.getTotal());
  };

  const removeFromCart = (id) => {
    cart.remove(id);
    setTotal(cart.getTotal());
  };

  useEffect(() => {
    setTotal(cart.getTotal());
  }, [cart]);

  return (
    <div className="cart">
      <form className="cart-form" action="" method="POST">
        <div class="cart-wrapper sm-touch-scroll">
          <table class="shop_table shop_table_responsive cart" cellSpacing="0">
            <thead>
              <tr>
                <th class="product-name" colspan="3">
                  Product
                </th>
                <th class="product-price">Price</th>
                <th class="product-quantity">Quantity</th>{" "}
                <th class="product-subtotal">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.getCart().map((item) => {
                return (
                  <CartItem
                    key={item.id}
                    item={item}
                    changeQuantity={changeQuantity}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                  />
                );
              })}
            </tbody>
          </table>
          <div>Total: ${totalPrice}</div>
        </div>
        <input type="button" value="Continue to Checkout >>" />
      </form>
    </div>
  );
}
