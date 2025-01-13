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

const ResidencePerForm = () => {
  const [country, setCountry] = useState({});
  const [province, setProvince] = useState({});
  const [city, setCity] = useState({});
  const [parroquia, setParroquia] = useState({});
  const [showResults, setShowResults] = useState();
  const [showResults2, setShowResults2] = useState();
  const [showResults3, setShowResults3] = useState();
  const [showResults4, setShowResults4] = useState();
  const fetchData = async () => {
    try {
      const requestData = {
        token_id: 'P6C917uy64vZORdyh2aWqBTLDxZMl0WfFEYwFEoQxMtczD3JUWVjO6fvZf0yfYz0',
        Nivel: 3,
        IdCatalogo: 13,
        CodigoPadre: 744,
      };

      const responseData = await UsefetchJson(
        'https://prod-12.westcentralus.logic.azure.com:443/workflows/2e44d1f8b5544972bf1ba2f8981b6d1c/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=wpStM96J-Y2oEejmUoep82a1htq_B0cIpIXhX_zKPEI',
        requestData,
      );

      setCountry(responseData.ResultSets.Table1);
      setShowResults(true);
    } catch (error) {
      console.error(error);
      // Maneja el error de la manera que prefieras
    }
  };

  const fetchDataProvince = async (province) => {
    try {
      const requestData = {
        token_id: 'P6C917uy64vZORdyh2aWqBTLDxZMl0WfFEYwFEoQxMtczD3JUWVjO6fvZf0yfYz0',
        Nivel: 4,
        IdCatalogo: 13,
        CodigoPadre: parseInt(province),
      };

      const responseData = await UsefetchJson(
        'https://prod-12.westcentralus.logic.azure.com:443/workflows/2e44d1f8b5544972bf1ba2f8981b6d1c/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=wpStM96J-Y2oEejmUoep82a1htq_B0cIpIXhX_zKPEI',
        requestData,
      );
      setProvince(responseData.ResultSets.Table1);
      setShowResults2(true);
    } catch (error) {
      console.error(error);
      // Maneja el error de la manera que prefieras
    }
  };

  const fetchDataCity = async (city) => {
    try {
      const requestData = {
        token_id: 'P6C917uy64vZORdyh2aWqBTLDxZMl0WfFEYwFEoQxMtczD3JUWVjO6fvZf0yfYz0',
        Nivel: 5,
        IdCatalogo: 13,
        CodigoPadre: parseInt(city),
      };

      const responseData = await UsefetchJson(
        'https://prod-12.westcentralus.logic.azure.com:443/workflows/2e44d1f8b5544972bf1ba2f8981b6d1c/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=wpStM96J-Y2oEejmUoep82a1htq_B0cIpIXhX_zKPEI',
        requestData,
      );
      setCity(responseData.ResultSets.Table1);
      setShowResults3(true);
    } catch (error) {
      console.error(error);
      // Maneja el error de la manera que prefieras
    }
  };
  const fetchDataParroquia = async (parroquia) => {
    try {
      const requestData = {
        token_id: 'P6C917uy64vZORdyh2aWqBTLDxZMl0WfFEYwFEoQxMtczD3JUWVjO6fvZf0yfYz0',
        Nivel: 6,
        IdCatalogo: 13,
        CodigoPadre: parseInt(parroquia),
      };

      const responseData = await UsefetchJson(
        'https://prod-12.westcentralus.logic.azure.com:443/workflows/2e44d1f8b5544972bf1ba2f8981b6d1c/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=wpStM96J-Y2oEejmUoep82a1htq_B0cIpIXhX_zKPEI',
        requestData,
      );
      setParroquia(responseData.ResultSets.Table1);
      setShowResults4(true);
    } catch (error) {
      console.error(error);
      // Maneja el error de la manera que prefieras
    }
  };
  const [formulario, setFormulario] = useState({
    province: 'Colombia',
    canton: 'Colombia',
    city: 'Colombia',
    parish: 'Colombia',
    sector: 'Colombia',
    descriptionlocation: 'Colombia',
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
    fetchDataProvince(value);
    fetchDataCity(value);
    //fetchDataParroquia(value);
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
                Dirección Permanente de Residencia */}
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
                  Formulario envio API
                  <pre>{JSON.stringify(formulario, null, 2)}</pre>
                  Register RHF
                  <pre>{JSON.stringify(watch(), null, 2)}</pre>
                  <Row>
                    <Col lg={12} md={12} sm={12} xs={12}></Col>
                  </Row>
                  <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label>Provincia</Label>
                        <Input
                          type="select"
                          name="province"
                          value={formulario.province}
                          onChange={handleChange}
                        >
                          {showResults ? <CountrySelect country={country} /> : <p>Cargando...</p>}
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label>Canton</Label>
                        <Input
                          type="select"
                          name="canton"
                          value={formulario.canton}
                          onChange={handleChange}
                        >
                          {showResults2 ? <CountrySelect country={province} /> : <p>Cargando...</p>}
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label>Ciudad</Label>
                        <Input
                          type="select"
                          name="city"
                          value={formulario.city}
                          onChange={handleChange}
                        >
                          {showResults3 ? <CountrySelect country={city} /> : <p>Cargando...</p>}
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      {/* <FormGroup>
                        <Label>Parroquia</Label>
                        <Input
                          type="select"
                          name="parish"
                          value={formulario.parish}
                          onChange={handleChange}
                        >
                          {showResults4 ? (
                            <CountrySelect country={parroquia} />
                          ) : (
                            <p>Cargando...</p>
                          )}
                        </Input>
                      </FormGroup> */}
                      <FormGroup>
                        <Label for="parish">Parroquia</Label>
                        <InputValidation register={register} name="parish" required={true} />
                        {errors.parish && (
                          <span className="text-danger">{errors.parish.message}</span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label for="mainstreet">Calle Principal</Label>
                        <InputValidation register={register} name="mainstreet" required={true} />
                        {errors.mainstreet && (
                          <span className="text-danger">{errors.mainstreet.message}</span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label for="numbering">Numeracion</Label>
                        <InputValidation register={register} name="numbering" required={true} />
                        {errors.numbering && (
                          <span className="text-danger">{errors.numbering.message}</span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label for="secondstreet">Calle Secundaria</Label>
                        <InputValidation register={register} name="secondstreet" required={true} />
                        {errors.secondstreet && (
                          <span className="text-danger">{errors.secondstreet.message}</span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label for="sector">Sector</Label>
                        <InputValidation register={register} name="sector" required={true} />
                        {errors.sector && (
                          <span className="text-danger">{errors.sector.message}</span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label for="descriptiolocation">Descripcion Ubicacion</Label>
                        <InputValidation
                          register={register}
                          name="descriptiolocation"
                          required={true}
                        />
                        {errors.descriptiolocation && (
                          <span className="text-danger">{errors.descriptiolocation.message}</span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label for="reference">Referencia</Label>
                        <InputValidation register={register} name="reference" required={true} />
                        {errors.reference && (
                          <span className="text-danger">{errors.reference.message}</span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label for="residencetime">Tiempo de Residencia</Label>
                        <InputValidation
                          register={register}
                          name="residencetime"
                          required={true}
                          type="number"
                          maxLength={3}
                        />
                        {errors.residencetime && (
                          <span className="text-danger">{errors.residencetime.message}</span>
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

export default ResidencePerForm;
