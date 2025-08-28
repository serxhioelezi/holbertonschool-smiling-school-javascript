import { Container, Row, Col, Form } from "react-bootstrap";
import "./index.css";
import Navigation from "../../components/Navigation";

const Courses = () => {
  return (
    <>
      <Navigation/>
        <main>
          <section>
              <div className="form-container">
                  <Container>
                    <Row>
                      <Col xs={12} md={4}>
                        <Form.Group className="mb-3">
                          <Form.Label htmlFor="inputPassword5">KEYWORDS</Form.Label>
                          <Form.Control
                            type="text"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                    
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={4}>
                        <Form.Group className="mb-3">
                          <Form.Label htmlFor="inputPassword5">TOPIC</Form.Label>
                          <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={4}>
                        <Form.Group className="mb-3">
                          <Form.Label htmlFor="inputPassword5">SORT BY</Form.Label>
                          <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Container>
              </div>
          </section>
        </main>
    </>
  )
}
export default Courses;
