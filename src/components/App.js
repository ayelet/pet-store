import "./App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Signup from "./UserLogin/signup";
import { Container } from "react-bootstrap";
// import AuthProvider from "./contexts/authContext";
import Products from "./Products/Products";
import CartProvider from "./CartContext/CartContext";
import NavigationMenu from "./NavigationMenu/NavigationMenu";

function App() {
  return (
    <>
      <NavigationMenu />
      <Container
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <CartProvider>
          <Products />
        </CartProvider>

        <footer>
          <a href="https://www.freepik.com/vectors/food">
            Food vector created by macrovector - www.freepik.com
          </a>
        </footer>
      </Container>
    </>
  );
}

export default App;
