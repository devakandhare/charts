import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GenderDropdown from "./GenderDropdown";
import ChartWrapper from "./ChartWrapper";

function App() {
  const [gender, setGender] = useState("Men");

  return (
    <div className="App">
      <Navbar bg="light">
        <Navbar.Brand>Barchart</Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          <Col sx={12}>
            <GenderDropdown value={gender} onChange={setGender} />
          </Col>
        </Row>
        <Row>
          <Col sx={12}>
            <ChartWrapper gender={gender} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
