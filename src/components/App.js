import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Signup from "./UserLogin/signup";
import { Container } from "react-bootstrap";
// import AuthProvider from "./contexts/authContext";
import Products from "./Products/Products";
import CartProvider from "./CartContext/CartContext";
import NavigationMenu from "./NavigationMenu/NavigationMenu";
import Footer from "./Footer/Footer";

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

        <Footer />
      </Container>
    </>
  );
}

export default App;
