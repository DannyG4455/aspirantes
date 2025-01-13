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
import { useEffect, useState } from 'react';
import incooplogo from '../../assets/images/users/logoIncoop.png';
import { UsefetchJson } from './Hooks/UsefetchJson';
import CountrySelect from './CountrySelect';

const ResidenceForm = () => {
  const [country, setCountry] = useState({});
  const [showResults, setShowResults] = useState();
  const fetchData = async () => {
    try {
      const requestData = {
        token_id: 'P6C917uy64vZORdyh2aWqBTLDxZMl0WfFEYwFEoQxMtczD3JUWVjO6fvZf0yfYz0',
        Nivel: 2,
        IdCatalogo: 13,
        CodigoPadre: '',
      };

      const responseData = await UsefetchJson(
        'https://prod-12.westcentralus.logic.azure.com:443/workflows/2e44d1f8b5544972bf1ba2f8981b6d1c/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=wpStM96J-Y2oEejmUoep82a1htq_B0cIpIXhX_zKPEI',
        requestData,
      );
      // console.log(responseData.ResultSets.Table1);
      //responseData.ResultSets.Table1.map((countries) => console.log(countries));
      setCountry(responseData.ResultSets.Table1);
      setShowResults(true);
    } catch (error) {
      console.error(error);
      // Maneja el error de la manera que prefieras
    }
  };

  const [formulario, setFormulario] = useState({
    paytaxes: 'Ecuador',
    taxpayerusa: 'No',
    country: 'Colombia',
    residentanothercountry: 'No',
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="exampleBox">
      <Container fluid className=" justify-content-center align-items-center h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col className="exampleContainer">
            <Card>
              <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                {/* <i className="bi bi-bell me-2"> </i>
                Autocertificación de Residencia Fiscal */}
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
                        <div>
                          <Label>¿Dónde pagas tus impuestos?</Label>
                        </div>
                        <FormGroup check inline>
                          <Input
                            type="radio"
                            onChange={handleChange}
                            name="paytaxes"
                            value="Ecuador"
                            checked={formulario.paytaxes === 'Ecuador'}
                          />
                          <Label check>Ecuador</Label>
                        </FormGroup>
                        <FormGroup check inline>
                          <Input
                            type="radio"
                            onChange={handleChange}
                            name="paytaxes"
                            value="Otro País"
                          />
                          <Label check>Otro País</Label>
                        </FormGroup>
                      </FormGroup>
                      {formulario.paytaxes === 'Otro País' && (
                        <FormGroup>
                          <Label>Seleccione el Pais</Label>
                          <Input
                            type="select"
                            name="country"
                            value={formulario.gender}
                            onChange={handleChange}
                          >
                            {showResults ? <CountrySelect country={country} /> : <p>Cargando...</p>}
                          </Input>
                        </FormGroup>
                      )}
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <div>
                          <Label>¿Eres Contribuyente en Estados Unidos?</Label>
                        </div>
                        <FormGroup check inline>
                          <Input
                            type="radio"
                            name="taxpayerusa"
                            onChange={handleChange}
                            value="No"
                            checked={formulario.taxpayerusa === 'No'}
                          />
                          <Label check>No</Label>
                        </FormGroup>
                        <FormGroup check inline>
                          <Input
                            type="radio"
                            name="taxpayerusa"
                            onChange={handleChange}
                            value="Si"
                          />
                          <Label check>Si</Label>
                        </FormGroup>
                      </FormGroup>
                      {formulario.taxpayerusa === 'Si' && (
                        <FormGroup>
                          <Label for="nui">Ingrese ID / NUI</Label>
                          <InputValidation register={register} name="nui" required={true} />
                          {errors.nui && <span className="text-danger">{errors.nui.message}</span>}
                        </FormGroup>
                      )}
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12}>
                      <FormGroup>
                        <div>
                          <Label>
                            ¿Es Residente en un país diferente a Estados Unidos o Ecuador?
                          </Label>
                        </div>
                        <FormGroup check inline>
                          <Input
                            type="radio"
                            name="residentanothercountry"
                            onChange={handleChange}
                            value="No"
                            checked={formulario.residentanothercountry === 'No'}
                          />
                          <Label check>No</Label>
                        </FormGroup>
                        <FormGroup check inline>
                          <Input
                            type="radio"
                            name="residentanothercountry"
                            onChange={handleChange}
                            value="Si"
                          />
                          <Label check>Si</Label>
                        </FormGroup>
                      </FormGroup>
                    </Col>
                    {formulario.residentanothercountry === 'Si' && (
                      <Col lg={6} md={6} sm={12} xs={12}>
                        <FormGroup>
                          <Label for="countryusa">Ingrese País</Label>
                          <InputValidation register={register} name="countryusa" required={true} />
                          {errors.countryusa && (
                            <span className="text-danger">{errors.countryusa.message}</span>
                          )}
                        </FormGroup>
                      </Col>
                    )}
                    {formulario.residentanothercountry === 'Si' && (
                      <Col lg={6} md={6} sm={12} xs={12}>
                        <FormGroup>
                          <Label for="nuiusa">Ingrese ID / NUI</Label>
                          <InputValidation register={register} name="nuiusa" required={true} />
                          {errors.nuiusa && (
                            <span className="text-danger">{errors.nuiusa.message}</span>
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

export default ResidenceForm;
