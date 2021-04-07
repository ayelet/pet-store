import React from "react";

export const CartContext = React.createContext([]);

class CartProvider extends React.Component {
  state = { cart: [] };

  onAddToCart = (id) => {
    return this.setState({ ...this.state.cart, id });
  };

  render() {
    return (
      <CartContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export default CartProvider;
// export default function CartProvider(props) {
//   const [cart, setCart] = useState([1, 1, 2, 3, 4]);

// const addToCart = (id) => {
//   console.log(cart, id);
//   setCart(...cart, id);
// };
// const removeFromCart = (id) => {
//   setCart(cart.filter((item) => item.id !== id));
// };
//   return (
//     // <CartContext.Provider value={[cart, addToCart, removeFromCart]}>
//     <CartContext.Provider value={[cart]}>{props.children}</CartContext.Provider>
//   );
// }
