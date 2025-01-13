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

const SupDocuments = () => {
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
                Tus documentos de respaldo */}
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
                    <Col lg={12} md={12} sm={12} xs={12}>
                      <FormGroup check>
                        <Input type="checkbox" id="exampleCustomCheckbox" />
                        <Label check className="form-label">
                          He leído y acepto todos los documentos a continuación detallados
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12}>
                      <FormGroup check>
                        <Input type="checkbox" id="exampleCustomCheckbox" />
                        <Label check className="form-label">
                          He leído y acepto el Convenio de relación comercial (Contrato)
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12}>
                      <FormGroup check>
                        <Input type="checkbox" id="exampleCustomCheckbox" />
                        <Label check className="form-label">
                          He leído y acepto el Aceptación de Tratamiento den Datos Personales
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12}>
                      <FormGroup check>
                        <Input type="checkbox" id="exampleCustomCheckbox" />
                        <Label check className="form-label">
                          He leído y acepto el Tarifario de Servicios
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12}>
                      <FormGroup check>
                        <Input type="checkbox" id="exampleCustomCheckbox" />
                        <Label check className="form-label">
                          He leído y acepto el Contrato de Apertura de Cuenta Transaccional
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12}>
                      <FormGroup check>
                        <Input type="checkbox" id="exampleCustomCheckbox" />
                        <Label check className="form-label">
                          He leído y acepto el Formulario de Residencia Fiscal
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12}>
                      <FormGroup check>
                        <Input type="checkbox" id="exampleCustomCheckbox" />
                        <Label check className="form-label">
                          He leído y acepto el Formulario de Vinculación
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Button className="d-block mx-auto">Continuar</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SupDocuments;
