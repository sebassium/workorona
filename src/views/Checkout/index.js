import React, { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// reactstrap components
import {
  Card,
  // CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import { SimpleNavbar } from "components";

const Terms = () => {
  document.documentElement.classList.remove("nav-open");
  useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  const [state, setState] = useState({
    app: false,
    others: false
  });

  const { app, others } = state;

  const hanldeClickApp = () => {
    setState({ app: true, others: false });
  };
  const hanldeClickOthers = () => {
    setState({ app: false, others: true });
  };

  return (
    <Fragment>
      <SimpleNavbar />
      <div className="section">
        <Container>
          <div>
            <Row className="text-center">
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Métodos de pago</h2>
                <h5 className="description">
                  Puedes realizar tu pago a través de una transferencia desde la
                  App de Bancolombia usando un código QR o seleccionar la opción
                  de pagar con otros métodos.
                </h5>
              </Col>
            </Row>
          </div>
          <Card style={{ maxWidth: "50rem" }} className="mx-auto">
            <CardBody>
              <CardTitle>
                <h4 className="title my-0">Con la App de Bancolombia</h4>
              </CardTitle>
              <CardText>
                Esta opción es fácil y rápida: solo entra a la App, selecciona
                "Leer QR" y escanéa el código y listo!
              </CardText>
              <Button
                color={app ? "danger" : "primary"}
                onClick={hanldeClickApp}
                className="btn-round btn-icon text-center"
              >
                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                Seleccionar
              </Button>
            </CardBody>
          </Card>
          <Card style={{ maxWidth: "50rem" }} className="mx-auto">
            <CardBody>
              <h4 className="title my-0">Con otros medios de pago</h4>
              <CardText>
                Seleccionando esta opción puedes pagar con tu tarjeta de crédito
                Visa, American Express, MasterCard, Diners Club o Codensa y
                también a través de PSE o Efecty.
              </CardText>
              <Button
                color={others ? "danger" : "primary"}
                onClick={hanldeClickOthers}
                className="btn-round btn-icon text-center"
                mp-mode="dftl"
                name="MP-payButton"
                href="https://www.mercadopago.com.co/checkout/v1/redirect?pref_id=151726621-8530e763-ec83-48fa-a2d7-cd1115b330e5"
              >
                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                Seleccionar
              </Button>
            </CardBody>
          </Card>
        </Container>
      </div>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Terms;

// <Button
//   size="lg"
//   color="info"
//   className="btn-round btn-icon text-center"
//   mp-mode="dftl"
//   name="MP-payButton"
//   href="https://www.mercadopago.com.co/checkout/v1/redirect?pref_id=151726621-893b2383-45a2-4a6f-9e74-5e8939319b7b"
// >
//   <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
//   Pagar
// </Button>
