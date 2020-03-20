import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

// reactstrap components
import {
  Button,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  Collapse
} from "reactstrap";

function SimpleNavbar() {
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");

  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 49 ||
        document.body.scrollTop > 49
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 50 ||
        document.body.scrollTop < 50
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand data-placement="bottom" to="/" tag={Link}>
            <Row xs="2">
              <Col className="pl-3 pr-2">
                <img
                  alt="..."
                  width="20px"
                  src={require("assets/img/crown-icon.png")}
                />
              </Col>
              <Col className="px-0">Workorona</Col>
            </Row>
          </NavbarBrand>
          <button className={classnames("navbar-toggler navbar-toggler")}>
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
          <Nav navbar>
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
  );
}

export default SimpleNavbar;
