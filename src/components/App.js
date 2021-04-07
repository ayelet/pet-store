import { BrowserRouter } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Signup from "./UserLogin/signup";
// import { Container } from "react-bootstrap";
import IndexPage from "./Pages/";

function App() {
  return (
    <BrowserRouter>
      <IndexPage />{" "}
    </BrowserRouter>
  );
}

export default App;
