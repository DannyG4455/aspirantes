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

const YourInfoOneForm = () => {
  const [formulario, setFormulario] = useState({
    employmentstatus: 'Publico',
    pep: 'No',
    economicactivity: 'Doctor',
    incomelevel: 'SBU',
  });
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
                Tu información */}
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
                        <Col lg={6} md={6} sm={12} xs={12}>
                          <FormGroup>
                            <Label>¿Situación Laboral?</Label>
                            <Input
                              type="select"
                              name="employmentstatus"
                              value={formulario.employmentstatus}
                              onChange={handleChange}
                            >
                              <option value="Publico">Publico</option>
                              <option value="Privado">Privado</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <div>
                          <Label>¿Eres una persona políticamente expuesta (PEP)?</Label>
                        </div>
                        <FormGroup check inline>
                          <Input
                            type="radio"
                            onChange={handleChange}
                            name="pep"
                            value="No"
                            checked={formulario.pep === 'No'}
                          />
                          <Label check>No</Label>
                        </FormGroup>
                        <FormGroup check inline>
                          <Input type="radio" onChange={handleChange} name="pep" value="Si" />
                          <Label check>Si</Label>
                        </FormGroup>
                      </FormGroup>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12}>
                      <FormGroup>
                        <Label for="enterprise">
                          Cuál es el nombre de la Empresa / Institución / Negocio:
                        </Label>
                        <InputValidation register={register} name="enterprise" required={true} />
                        {errors.enterprise && (
                          <span className="text-danger">{errors.enterprise.message}</span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label>Su Actividad Económica</Label>
                        <Input
                          type="select"
                          name="economicactivity"
                          value={formulario.economicactivity}
                          onChange={handleChange}
                        >
                          <option value="Doctor">Doctor</option>
                          <option value="Abogado">Abogado</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label for="agebusiness">Antigüedad del Negocio</Label>
                        <InputValidation
                          register={register}
                          name="agebusiness"
                          required={true}
                          type="number"
                        />
                        {errors.agebusiness && (
                          <span className="text-danger">{errors.agebusiness.message}</span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label for="charge">Cargo</Label>
                        <InputValidation register={register} name="charge" required={true} />
                        {errors.charge && (
                          <span className="text-danger">{errors.charge.message}</span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label for="agecharge">Antigüedad en el cargo</Label>
                        <InputValidation
                          register={register}
                          name="agecharge"
                          required={true}
                          type="number"
                        />
                        {errors.agecharge && (
                          <span className="text-danger">{errors.agecharge.message}</span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label>¿Selecciona tu nivel de ingresos promedio?</Label>
                        <Input
                          type="select"
                          name="incomelevel"
                          value={formulario.incomelevel}
                          onChange={handleChange}
                        >
                          <option value="Doctor">SBU</option>
                          <option value="Abogado">Hasta 1K</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Button className="d-block mx-auto">CONTINUEMOS</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default YourInfoOneForm;
