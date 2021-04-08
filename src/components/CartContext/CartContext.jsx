import React, { useState } from "react";
// import Cart from "../Cart/CartDB";
export const CartContext = React.createContext([]);

export const CartProvider = (props) => {
  const [cart] = useState("hello");

  return <CartProvider>{[cart]}</CartProvider>;
};

export default CartProvider;
