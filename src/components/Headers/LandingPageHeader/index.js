import React, { Fragment, createRef, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components
const backgroundImage =
  "https://res.cloudinary.com/sebashr20/image/upload/v1585004469/seed/feelewloown9pdfrg7vp.png";

const LandingPageHeader = () => {
  let pageHeader = createRef();

  useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <Fragment>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>¡Entrega tus trabajos a tiempo!</h1>
            <h3>
              En Workorona somos expertos en resolver tus tareas de colegio o
              talleres de universidad y darte la asesoría que necesitas.
            </h3>
            <br />

            <Button
              className="btn-round"
              color="info"
              type="button"
              tag={HashLink}
              smooth
              to="#como-funciona"
            >
              Comenzar
            </Button>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default LandingPageHeader;
