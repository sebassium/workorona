import React, { Fragment } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  Button,
  Form,
  Input,
  InputGroup,
  Container,
  Row,
  Col,
  FormText
} from "reactstrap";

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  text: Yup.string()
    .min(2, "Too Short!")
    .max(500, "Too Long!")
    .required("Required")
});

const FormSection = () => {
  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: {
      name: "",
      email: "",
      text: ""
    },
    validationSchema: FormSchema,
    onSubmit: values => {
      const { name, email, text } = values;
      const newName = replaceSpace(name);
      const newText = replaceSpace(text);
      sendMsg(newName, email, newText);
    }
  });

  const { name, email, text } = values;

  const replaceSpace = text => {
    return text.replace(/ /g, "%20");
  };

  const sendMsg = (name, email, text) => {
    const url = `https://api.whatsapp.com/send?phone=573103769786&text=Hola%20Workana!%20Estoy%20interesad@%20en%20tus%20servicios.%20Nombre:%20${name},%20Correo:%20${email},%20Mensaje:%20${text}`;
    window.open(url, "_blank");
  };

  return (
    <Fragment>
      <div className="section landing-section" id="enviar">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title text-center">Envía tu trabajo</h2>
              <Form className="contact-form" onSubmit={handleSubmit}>
                <Row>
                  <Col md="6">
                    <label>Nombre</label>
                    <InputGroup>
                      <Input
                        placeholder="Nombre"
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        value={name}
                        invalid={errors.name && touched.name ? true : false}
                      />
                    </InputGroup>
                    <FormText className="text-danger">{errors.name}</FormText>
                  </Col>
                  <Col md="6">
                    <label>Email</label>
                    <InputGroup>
                      <Input
                        placeholder="Email"
                        id="email"
                        name="email"
                        type="email"
                        onChange={handleChange}
                        value={email}
                        invalid={errors.email && touched.email ? true : false}
                      />
                    </InputGroup>
                    <FormText className="text-danger">{errors.email}</FormText>
                  </Col>
                </Row>
                <label>Mensaje</label>
                <Input
                  placeholder="Cuéntanos un poco de qué es el trabajo o asesoría que necesitas..."
                  type="textarea"
                  rows="4"
                  id="text"
                  name="text"
                  onChange={handleChange}
                  value={text}
                  invalid={errors.text && touched.text ? true : false}
                />
                <FormText className="text-danger">{errors.text}</FormText>
                <Row>
                  <Col className="ml-auto mr-auto text-center">
                    <Button
                      type="submit"
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
    </Fragment>
  );
};

export default FormSection;
