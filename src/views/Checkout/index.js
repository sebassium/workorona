import React, { Fragment, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// reactstrap components
import { Button } from "reactstrap";

// core components
import { SimpleNavbar, Footer } from "components";

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
      <div className="mt-4" />
      <Button
        size="lg"
        color="info"
        className="btn-round btn-icon text-center"
        mp-mode="dftl"
        name="MP-payButton"
        href="https://www.mercadopago.com.co/checkout/v1/redirect?pref_id=151726621-893b2383-45a2-4a6f-9e74-5e8939319b7b"
      >
        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
        Pagar
      </Button>
      <Footer />
    </Fragment>
  );
};

export default Terms;
