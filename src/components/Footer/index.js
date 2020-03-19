import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Row, Container, Button } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <Button className="mr-1" color="link" tag={Link} to="/terminos">
                  Términos y condiciones
                </Button>
              </li>
              <li>
                <Button
                  className="mr-1"
                  color="link"
                  tag={Link}
                  to="/provcidad"
                >
                  Política de provacidad
                </Button>
              </li>
              <li>
                <Button className="mr-1" color="link" tag={Link} to="/contacto">
                  Contáctanos
                </Button>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, hecho con{" "}
              <i className="fa fa-heart heart" /> por Workorona
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
