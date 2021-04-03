import "./App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Signup from "./UserLogin/signup";
import { Container } from "react-bootstrap";
// import AuthProvider from "./contexts/authContext";
import Products from "./Products/Products";

function App() {
  return (
    <Container
      className="under-construction d-flex flex-column align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <h1 className="d-block">Fur Real - Whatever your pet needs</h1>
      <Products />

      {/*<footer>
        <a href="https://www.freepik.com/vectors/food">
          Food vector created by macrovector - www.freepik.com
        </a>
     </footer>*/}
    </Container>
  );
}

export default App;
