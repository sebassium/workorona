import React, { Fragment, useEffect } from "react";

// reactstrap components
// import { Container, Row, Col } from "reactstrap";

// core components
import terms from "./terms.md";
import {
  SimpleNavbar,
  ProfilePageHeader,
  Footer,
  MarkdownText
} from "components";

const Terms = () => {
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
      <MarkdownText title={"Términos y Condiciones"} body={terms} />
      <Footer />
    </Fragment>
  );
};

export default Terms;
