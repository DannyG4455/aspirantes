import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
} from 'reactstrap';

import { useForm } from 'react-hook-form';
import InputValidation from './InputValidation';
import { useState } from 'react';
import incooplogo from '../../assets/images/users/logoIncoop.png';

const SecurityCodeForm = () => {
  const [formulario, setFormulario] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    setFormulario((prevState) => ({
      ...prevState,
      ...data,
    }));
    console.log(data);
  };

  const handleChange = (event) => {
    let { name, value } = event.target;
    setFormulario((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    return value;
  };

  return (
    <div className="exampleBox">
      <Container fluid className=" justify-content-center align-items-center h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col className="exampleContainer">
            <Card>
              <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                {/* <i className="bi bi-bell me-2"> </i>
                Codigo de seguridad */}
                <Col lg={12} md={12} sm={12} xs={12}>
                  <FormGroup>
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        src={incooplogo}
                        //className="rounded-circle"
                        alt="avatar"
                        width="150"
                        height="150"
                        className="img-fluid"
                      />
                    </div>
                  </FormGroup>
                </Col>
              </CardTitle>
              <CardBody className="p-4 m-1">
                <Form onSubmit={handleSubmit(onSubmit)}>
                  {/* Formulario envio API
                  <pre>{JSON.stringify(formulario, null, 2)}</pre>
                  Register RHF
                  <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
                  <Row>
                    <Col lg={12} md={12} sm={12} xs={12}></Col>
                  </Row>
                  <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label for="phonecode">Ingresa la clave enviada a tu celular</Label>
                        <InputValidation
                          register={register}
                          name="phonecode"
                          required={true}
                          maxLength={6}
                          minLength={6}
                        />
                        {errors.phonecode && (
                          <span className="text-danger">{errors.phonecode.message}</span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label for="mailcode">Ingresa la clave enviada a tu email</Label>
                        <InputValidation
                          register={register}
                          name="mailcode"
                          required={true}
                          maxLength={6}
                          minLength={6}
                        />
                        {errors.mailcode && (
                          <span className="text-danger">{errors.mailcode.message}</span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup check>
                        <Input type="checkbox" id="exampleCustomCheckbox" />
                        <Label check className="form-label">
                          Acepto y he leído todos los TyC
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Button className="d-block mx-auto">Acepto Apertura de mi Cuenta</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SecurityCodeForm;
