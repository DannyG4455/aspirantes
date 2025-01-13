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
} from 'reactstrap';

import { useForm } from 'react-hook-form';
import InputValidation from './InputValidation';

const Forms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Form Example
          </CardTitle>
          <CardBody>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <pre>{JSON.stringify(watch(), null, 2)}</pre>
              <FormGroup>
                <Label for="baseexample">Ejemplo base</Label>
                <InputValidation
                  register={register}
                  name="baseexample"
                  //maxLength={6}
                  //minLength={2}
                  //required={true}
                  //watch={watch}
                  // email={true}
                  //type="money"
                />
                {errors.baseexample && (
                  <span className="text-danger">{errors.baseexample.message}</span>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="number">Numero</Label>
                <InputValidation
                  register={register}
                  name="number"
                  maxLength={10}
                  minLength={2}
                  required={true}
                  //watch={watch}
                  // email={true}
                  type="number"
                />
                {errors.number && <span className="text-danger">{errors.number.message}</span>}
              </FormGroup>
              <FormGroup>
                <Label for="letter">Letras</Label>
                <InputValidation
                  register={register}
                  name="letter"
                  maxLength={20}
                  minLength={2}
                  required={true}
                  //watch={watch}
                  // email={true}
                  type="letter"
                />
                {errors.letter && <span className="text-danger">{errors.letter.message}</span>}
              </FormGroup>
              <FormGroup>
                <Label for="uppercase">Mayusculas</Label>
                <InputValidation
                  register={register}
                  name="uppercase"
                  maxLength={20}
                  minLength={2}
                  required={true}
                  //watch={watch}
                  // email={true}
                  type="uppercase"
                />
                {errors.uppercase && (
                  <span className="text-danger">{errors.uppercase.message}</span>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="lowercase">Minusculas</Label>
                <InputValidation
                  register={register}
                  name="lowercase"
                  maxLength={20}
                  minLength={2}
                  required={true}
                  //watch={watch}
                  // email={true}
                  type="lowercase"
                />
                {errors.lowercase && (
                  <span className="text-danger">{errors.lowercase.message}</span>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <InputValidation
                  register={register}
                  name="email"
                  required={true}
                  //watch={watch}
                  email={true}
                  //type="lowercase"
                />
                {errors.email && <span className="text-danger">{errors.email.message}</span>}
              </FormGroup>
              <FormGroup>
                <Label for="email">Dinero</Label>
                <InputValidation
                  register={register}
                  name="money"
                  required={true}
                  //watch={watch}
                  //email={true}
                  type="money"
                />
                {errors.money && <span className="text-danger">{errors.money.message}</span>}
              </FormGroup>
              <FormGroup>
                <Label for="name">Nombres</Label>
                <InputValidation
                  register={register}
                  name="name"
                  maxLength={20}
                  minLength={2}
                  required={true}
                  //watch={watch}
                  // email={true}
                  type="uppercasename"
                />
                {errors.name && <span className="text-danger">{errors.name.message}</span>}
              </FormGroup>
              <FormGroup>
                <Label for="name">Ubicacion</Label>
                <InputValidation
                  register={register}
                  name="location"
                  maxLength={20}
                  minLength={2}
                  required={true}
                  //watch={watch}
                  // email={true}
                  type="uppercasefirstletter"
                />
                {errors.location && <span className="text-danger">{errors.location.message}</span>}
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input id="exampleSelect" name="select" type="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelectMulti">Select Multiple</Label>
                <Input id="exampleSelectMulti" multiple name="selectMulti" type="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input id="exampleText" name="text" type="textarea" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input id="exampleFile" name="file" type="file" />
                <FormText>
                  This is some placeholder block-level help text for the above input. Its a bit
                  lighter and easily wraps to a new line.
                </FormText>
              </FormGroup>
              <FormGroup tag="fieldset">
                <legend>Radio Buttons</legend>
                <FormGroup check>
                  <Input name="radio1" type="radio" />{' '}
                  <Label check className=" form-label">
                    Option one is this and that—be sure to include why its great
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input name="radio1" type="radio" />{' '}
                  <Label check className=" form-label">
                    Option two can be something else and selecting it will deselect option one
                  </Label>
                </FormGroup>
                <FormGroup check disabled>
                  <Input disabled name="radio1" type="radio" />{' '}
                  <Label check className=" form-label">
                    Option three is disabled
                  </Label>
                </FormGroup>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" />{' '}
                <Label check className=" form-label">
                  Check me out
                </Label>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forms;
