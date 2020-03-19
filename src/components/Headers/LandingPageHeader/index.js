import React, { Fragment } from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
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
          backgroundImage: "url(" + require("assets/img/daniel-olahh.jpg") + ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>¡Entrega tus trabajos a tiempo!</h1>
            <h4>
              En Workorona somos expertos en resolver tus tareas de colegio o
              talleres de universidad y darte la asesoría que necesitas.
            </h4>
            <br />
            <Button className="btn-round" color="neutral" type="button" outline>
              Download
            </Button>
          </div>
        </Container>
      </div>
    </Fragment>
  );
}

export default LandingPageHeader;
