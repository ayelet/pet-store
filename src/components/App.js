import "./App.css";
// import Signup from "./UserLogin/signup";
import { Container } from "react-bootstrap";
// import AuthProvider from "./contexts/authContext";
import Products from "./Products/Products";

function App() {
  return (
    <Container
      className="under-construction d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <h1 className="d-block">Fur Real - Whatever your pet needs</h1>
      <div className="w-100 d-block" style={{ maxWidth: "400px" }}>
        <Products />
      </div>
      <footer>
        <a href="https://www.freepik.com/vectors/food">
          Food vector created by macrovector - www.freepik.com
        </a>
      </footer>
    </Container>
  );
}

export default App;
