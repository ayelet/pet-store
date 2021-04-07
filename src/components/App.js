import { BrowserRouter } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CartProvider from "./CartContext/CartContext";
// import Signup from "./UserLogin/signup";
// import { Container } from "react-bootstrap";
import IndexPage from "./Pages/";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <IndexPage />{" "}
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
