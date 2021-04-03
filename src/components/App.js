import "./App.css";
import Signup from "./Signup";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100 under-construction" alt="under construction">
        <h1>hi, I am under construction</h1>
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Signup />
        </div>
      </div>
    </Container>
  );
}

export default App;
