import {
  GeneralInputControl,
  LowerCaseInputControl,
  MoneyInputControl,
  UpperCaseFirstLetterInputControl,
  UpperCaseInputControl,
  UpperCaseNameInputControl,
} from './Validation/InputTypeValidations';

const InputValidation = ({
  register,
  name,
  watch,
  minLength,
  maxLength,
  required,
  email,
  type,
}) => {
  return (
    <>
      <div className="mb-2">
        <input
          type="text"
          {...register(name, {
            required: {
              value: required,
              message: 'Dato Requerido',
            },
            pattern: {
              value: email && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Correo no valido',
            },
            minLength: {
              value: minLength,
              message: `Minimo ${minLength} digitos`,
            },
            maxLength: {
              value: maxLength,
              message: `Maximo ${maxLength} digitos`,
            },
            //validate: (value) => value === watch('lastname') || 'Los campos son distintos',
          })}
          className="form-control"
          onInput={(e) => {
            switch (type) {
              case 'number':
                GeneralInputControl(e, /[^\d]/g, maxLength);
                break;
              case 'letter':
                GeneralInputControl(e, /[^a-zA-ZñÑ\s]/g, maxLength);
                break;
              case 'uppercase':
                UpperCaseInputControl(e, maxLength);
                break;
              case 'lowercase':
                LowerCaseInputControl(e, /[^a-zA-ZñÑ\s]/g, maxLength);
                break;
              case 'money':
                MoneyInputControl(e, /[^\d.]/g, maxLength);
                break;
              case 'uppercasename':
                UpperCaseNameInputControl(e, /[^a-zA-Z\s]/g, maxLength);
                break;
              case 'uppercasefirstletter':
                UpperCaseFirstLetterInputControl(e, /[^a-zA-ZñÑ\s]/g, maxLength);
                break;
              default:
                break;
            }
          }}
        />
      </div>
    </>
  );
};

export default InputValidation;
