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

const YourInfoTwoForm = () => {
  const [formulario, setFormulario] = useState({
    civilstate: 'Soltero',
    gender: 'Masculino',
    birthday: '2024-08-19',
    phone: 'No',
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
                        <Label for="name">Nombres</Label>
                        <InputValidation register={register} name="name" required={true} />
                        {errors.name && <span className="text-danger">{errors.name.message}</span>}
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Col lg={6} md={6} sm={12} xs={12}>
                          <FormGroup>
                            <Label>Estado Civil</Label>
                            <Input
                              type="select"
                              name="civilstate"
                              value={formulario.sector}
                              onChange={handleChange}
                            >
                              <option value="Soltero">Soltero</option>
                              <option value="Casado">Casado</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </FormGroup>
                    </Col>
                    {formulario.civilstate === 'Casado' && (
                      <Col lg={6} md={6} sm={12} xs={12}>
                        <FormGroup>
                          <Label for="wifename">Nombres Conyugue</Label>
                          <InputValidation register={register} name="wifename" required={true} />
                          {errors.wifename && (
                            <span className="text-danger">{errors.wifename.message}</span>
                          )}
                        </FormGroup>
                      </Col>
                    )}
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label for="educationlevel">Nivel de Educación</Label>
                        <InputValidation
                          register={register}
                          name="educationlevel"
                          required={true}
                        />
                        {errors.educationlevel && (
                          <span className="text-danger">{errors.educationlevel.message}</span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label for="identification">Identificación</Label>
                        <InputValidation
                          register={register}
                          name="identification"
                          required={true}
                          type="number"
                          maxLength={10}
                          minLength={10}
                        />
                        {errors.identification && (
                          <span className="text-danger">{errors.identification.message}</span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label>Genero</Label>
                        <Input
                          type="select"
                          name="gender"
                          value={formulario.gender}
                          onChange={handleChange}
                        >
                          <option value="Masculino">Masculino</option>
                          <option value="Femenino">Femenino</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label for="birthday">Fecha de nacimiento</Label>
                        <Input
                          type="date"
                          defaultValue="2024-08-19"
                          value={formulario.birthday}
                          name="issuedate"
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label for="nickname">Cuéntanos como te gusta que te llamemos</Label>
                        <InputValidation register={register} name="nickname" required={true} />
                        {errors.nickname && (
                          <span className="text-danger">{errors.nickname.message}</span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label for="nickname">Email</Label>
                        <InputValidation
                          register={register}
                          name="email"
                          required={true}
                          email={true}
                        />
                        {errors.email && (
                          <span className="text-danger">{errors.email.message}</span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label for="cellphone">Celular</Label>
                        <InputValidation
                          register={register}
                          name="cellphone"
                          required={true}
                          type="number"
                          maxLength={10}
                          minLength={10}
                        />
                        {errors.cellphone && (
                          <span className="text-danger">{errors.cellphone.message}</span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <div>
                          <Label>¿Tienes un número de domicilio o trabajo?</Label>
                        </div>
                        <FormGroup check inline>
                          <Input
                            type="radio"
                            onChange={handleChange}
                            name="phone"
                            value="No"
                            checked={formulario.phone === 'No'}
                          />
                          <Label check>No</Label>
                        </FormGroup>
                        <FormGroup check inline>
                          <Input type="radio" onChange={handleChange} name="phone" value="Si" />
                          <Label check>Si</Label>
                        </FormGroup>
                      </FormGroup>
                    </Col>
                    {formulario.phone === 'Si' && (
                      <Col lg={6} md={6} sm={12} xs={12}>
                        <FormGroup>
                          <Label for="phonenumber">Numero Convencional</Label>
                          <InputValidation
                            register={register}
                            name="phonenumber"
                            required={true}
                            type="number"
                          />
                          {errors.phonenumber && (
                            <span className="text-danger">{errors.phonenumber.message}</span>
                          )}
                        </FormGroup>
                      </Col>
                    )}
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

export default YourInfoTwoForm;
