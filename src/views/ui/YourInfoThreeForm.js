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

const YourInfoThreeForm = () => {
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
                    <Col lg={12} md={12} sm={12} xs={12}>
                      <FormGroup>
                        <Label for="address">Dirección</Label>
                        <InputValidation register={register} name="address" required={true} />
                        {errors.address && (
                          <span className="text-danger">{errors.address.message}</span>
                        )}
                      </FormGroup>
                    </Col>

                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label for="revenue">Ingresos</Label>
                        <InputValidation
                          register={register}
                          name="revenue"
                          required={true}
                          type="number"
                        />
                        {errors.revenue && (
                          <span className="text-danger">{errors.revenue.message}</span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label for="assets">Activos</Label>
                        <InputValidation
                          register={register}
                          name="assets"
                          required={true}
                          type="number"
                        />
                        {errors.assets && (
                          <span className="text-danger">{errors.assets.message}</span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label for="expenses">Egresos</Label>
                        <InputValidation
                          register={register}
                          name="expenses"
                          required={true}
                          type="number"
                        />
                        {errors.expenses && (
                          <span className="text-danger">{errors.expenses.message}</span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label for="liabilities">Pasivos</Label>
                        <InputValidation
                          register={register}
                          name="liabilities"
                          required={true}
                          type="number"
                        />
                        {errors.liabilities && (
                          <span className="text-danger">{errors.liabilities.message}</span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label for="netincome">Ingreso Neto</Label>
                        <InputValidation
                          register={register}
                          name="netincome"
                          required={true}
                          type="number"
                        />
                        {errors.netincome && (
                          <span className="text-danger">{errors.netincome.message}</span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label for="heritage">Patrimonio</Label>
                        <InputValidation
                          register={register}
                          name="heritage"
                          required={true}
                          type="number"
                        />
                        {errors.heritage && (
                          <span className="text-danger">{errors.heritage.message}</span>
                        )}
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

export default YourInfoThreeForm;
