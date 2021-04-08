import React, { useState } from "react";
// import Cart from "../Cart/Cart";
// import Cart from "../Cart/Cart";
export const CartContext = React.createContext([]);

export const CartProvider = (props) => {
  const [cart] = useState("hello");

  return <CartProvider>{[cart]}</CartProvider>;
};

export default CartProvider;
