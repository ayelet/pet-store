import { BrowserRouter } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CartProvider from "./CartContext/CartContext";
// import Signup from "./UserLogin/signup";
// import { Container } from "react-bootstrap";
import IndexPage from "./Pages/";
import Layout from "./Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <IndexPage />{" "}
        </Layout>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
