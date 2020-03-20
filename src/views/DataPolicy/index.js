import React, { Fragment, useEffect } from "react";

// reactstrap components
// import { Container, Row, Col } from "reactstrap";

// core components
import dataPolicy from "./dataPolicy.md";
import {
  SimpleNavbar,
  ProfilePageHeader,
  Footer,
  MarkdownText
} from "components";

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
      <SimpleNavbar />
      <ProfilePageHeader />
      <MarkdownText title={"Política de Privacidad"} body={dataPolicy} />
      <Footer />
    </Fragment>
  );
};

export default DataPolicy;
