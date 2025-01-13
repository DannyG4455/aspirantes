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
  Container,
} from 'reactstrap';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import incooplogo from '../../assets/images/users/logoIncoop.png';
import { UsefetchJson } from './Hooks/UsefetchJson';
import InputValidation from './InputValidation';

const Forms = () => {
  const [FormResponse, setFormResponse] = useState({});
  const [fileData, setFileData] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const fetchData = async (formData) => {
    try {
      const requestData = { formulario: formData };

      const responseData = await UsefetchJson(
        'https://prod-04.brazilsouth.logic.azure.com:443/workflows/dea5fc4f64b8467b84fe9171a39dcc35/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=I_dy4O-35_CGWaqhCz2gvNgESAqHMAPSHktUTJfh_aA',
        requestData,
      );

      setFormResponse(responseData);
      console.log('API Response:', responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileData(file);
      console.log('Archivo seleccionado:', file);
    } else {
      console.warn('No se seleccionó ningún archivo');
    }
  };

  const onSubmit = async (data) => {
    try {
      let base64File = null;

      if (fileData) {
        base64File = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(fileData);
          reader.onload = () => {
            const base64String = reader.result.split(',')[1];
            resolve(base64String);
          };
          reader.onerror = (error) => reject(error);
        });
      }

      const updatedForm = {
        ...data,
        file: base64File,
      };

      console.log('Datos enviados:', updatedForm);

      await fetchData(updatedForm);
    } catch (error) {
      console.error('Error al procesar el archivo:', error);
    }
  };

  return (
    <div className="exampleBox">
      <Container fluid className="justify-content-center align-items-center h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col className="exampleContainer">
            <Card>
              <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                <Col lg={12}>
                  <FormGroup>
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        src={incooplogo}
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
                  <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label for="name">Nombre Completo</Label>
                        <InputValidation register={register} name="name" required={true} />
                        {errors.name && <span className="text-danger">{errors.name.message}</span>}
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label for="cellphone">Numero Celular</Label>
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
                        <Label for="city">Ciudad</Label>
                        <InputValidation register={register} name="city" required={true} />
                        {errors.city && <span className="text-danger">{errors.city.message}</span>}
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label for="position">Cargo al que aplica</Label>
                        <InputValidation register={register} name="position" required={true} />
                        {errors.position && (
                          <span className="text-danger">{errors.position.message}</span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <FormGroup>
                        <Label for="email">Correo Electronico</Label>
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
                        <Label for="linkedin">Linkedin URL</Label>
                        <InputValidation register={register} name="linkedin" required={true} />
                        {errors.linkedin && (
                          <span className="text-danger">{errors.linkedin.message}</span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col lg={12}>
                      <FormGroup>
                        <Label for="file">Hoja de Vida</Label>
                        <Input
                          id="file"
                          name="file"
                          type="file"
                          accept="application/pdf"
                          {...register('file')}
                          onChange={handleFileChange}
                        />
                        {errors.file && (
                          <span className="text-danger">Debe subir un archivo válido.</span>
                        )}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Button className="d-block mx-auto">ENVIAR</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Forms;
