import React, { Fragment, useEffect } from "react";

// reactstrap components
// import { Container, Row, Col } from "reactstrap";

// core components
import { Navbar, ProfilePageHeader, Footer } from "components";

const DataPolicy = () => {
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
      <ProfilePageHeader />
      <h1>Términos y condiciones</h1>
      <Footer />
    </Fragment>
  );
};

export default DataPolicy;
