import React, { Fragment, useEffect } from "react";

// reactstrap components
import {
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import { Navbar, LandingPageHeader, Footer } from "components";

const LandingPage = () => {
  document.documentElement.classList.remove("nav-open");
  useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  return (
    <Fragment>
      <Navbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center" id="como-funciona">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">¿Cómo funciona?</h2>
                <h5 className="description">Usar Workorona es muy simple.</h5>
                <br />
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Envío</h4>
                    <p className="description">
                      Nos envías un archivo o una fotografía del trabajo, junto
                      con el material de soporte que tengas.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Cotización</h4>
                    <p>
                      En menos de 1 hora te decimos el costo del trabajo de
                      acuerdo a su longitud y dificultad.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Entrega</h4>
                    <p>
                      Te enviamos el trabajo completamente resuelto a tu correo
                      electrónico en 48 horas o menos.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Asesoría</h4>
                    <p>
                      Si lo necesitas, te explicamos el trabajo y te brindamos
                      ayuda en las preguntas que tengas.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className="section section-dark section-nucleo-icons"
          id="servicios"
        >
          <Container className="mt-5 mb-5">
            <Row>
              <Col lg="6" md="12">
                <h2 className="title">Servicios</h2>
                <p className="description">
                  El equipo de Workorona es experto en resolver talleres y
                  trabajos, y en dar asesorías personalizadas y grupales en
                  multimples áreas de conocimeinto:
                </p>
                <br />
                <Row className="description">
                  <Col>
                    <p>·Matemáticas</p>
                    <p>·Geometría</p>
                    <p>·Cálculo</p>
                  </Col>
                  <Col>
                    <p>·Química</p>
                    <p>·Física</p>
                    <p>·Biología</p>
                  </Col>
                  <Col>
                    <p>·Español</p>
                    <p>·Inglés</p>
                    <p>·Alemán</p>
                  </Col>
                </Row>
              </Col>
              <Col lg="6" md="12">
                <div className="icons-container">
                  <i className="nc-icon nc-time-alarm" />
                  <i className="nc-icon nc-atom" />
                  <i className="nc-icon nc-camera-compact" />
                  <i className="nc-icon nc-watch-time" />
                  <i className="nc-icon nc-key-25" />
                  <i className="nc-icon nc-diamond" />
                  <i className="nc-icon nc-user-run" />
                  <i className="nc-icon nc-layout-11" />
                  <i className="nc-icon nc-badge" />
                  <i className="nc-icon nc-bulb-63" />
                  <i className="nc-icon nc-favourite-28" />
                  <i className="nc-icon nc-planet" />
                  <i className="nc-icon nc-tie-bow" />
                  <i className="nc-icon nc-zoom-split" />
                  <i className="nc-icon nc-cloud-download-93" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section" id="enviar">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title text-center">Envía tu trabajo</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Nombre</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Nombre" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Mensaje</label>
                  <Input
                    placeholder="Cuéntanos un poco de qué es el trabajo o asesoría que necesitas..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button
                        href="https://api.whatsapp.com/send?phone=573103769786&text=Hola"
                        target="_blank"
                        className="btn-fill"
                        color="danger"
                        size="lg"
                      >
                        Enviar trabajo
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default LandingPage;
