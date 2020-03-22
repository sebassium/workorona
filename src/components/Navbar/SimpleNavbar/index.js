import React, { Fragment } from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Col,
  Row,
  Button,
  Collapse
} from "reactstrap";

// core components
const logo =
  "https://res.cloudinary.com/sebashr20/image/upload/q_auto:low/v1584712984/seed/tin69rcpqoqbw39ktxef.png";

const SimpleNavbar = () => {
  const [bodyClick, setBodyClick] = React.useState(false);
  return (
    <Fragment>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
          }}
        />
      ) : null}
      <Navbar expand="lg" className="navbar-light bg-primary">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand data-placement="bottom" to="/" tag={Link}>
              <Row xs="2">
                <Col className="pl-3 pr-2">
                  <img alt="..." width="20px" src={logo} />
                </Col>
                <Col className="px-0">Workorona</Col>
              </Row>
            </NavbarBrand>
            <button className="navbar-toggler navbar-toggler">
              <Button
                size="sm"
                className="btn-round mr-2 px-3"
                color="neutral"
                outline
                to="/"
                tag={Link}
              >
                Atrás
              </Button>
            </button>
          </div>
          <Collapse className="justify-content-end" navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button
                  size="sm"
                  className="btn-round mr-2 px-3"
                  color="neutral"
                  outline
                  to="/"
                  tag={Link}
                >
                  Atrás
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default SimpleNavbar;
