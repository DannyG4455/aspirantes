const formatCurrency = (value) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(Number(value));
};

export const GeneralInputControl = (e, RegularExpression, MaxCharacters) => {
  let value = e.target.value.replace(RegularExpression, '');
  value = value.substring(0, MaxCharacters);
  e.target.value = value;
};

export const UpperCaseInputControl = (e, RegularExpression, MaxCharacters) => {
  let value = e.target.value.replace(RegularExpression, '').toUpperCase();
  value = value.substring(0, MaxCharacters);
  e.target.value = value;
};

export const UpperCaseFirstLetterInputControl = (e, RegularExpression, MaxCharacters) => {
  let value = e.target.value.toLowerCase(); // Convertir todas las letras a minúsculas
  value = value.charAt(0).toUpperCase() + value.slice(1); // Convertir la primera letra a mayúscula
  value = value.replace(RegularExpression, ''); // Eliminar caracteres especiales que no sean letras ni espacios
  value = value.substring(0, MaxCharacters); // Limitar la longitud máxima
  e.target.value = value; // Actualizar el valor del campo
};

export const UpperCaseNameInputControl = (e, RegularExpression, MaxCharacters) => {
  let value = e.target.value.toLowerCase();
  value = value.replace(/\b\w/g, (match) => match.toUpperCase());
  value = value.replace(/ñ/g, 'n').replace(/Ñ/g, 'N'); // Reemplazar "ñ" por "n" y "Ñ" por "N"
  value = value.replace(RegularExpression, ''); // Eliminar caracteres especiales que no sean letras ni espacios
  value = value.substring(0, MaxCharacters);
  e.target.value = value;
};

export const LowerCaseInputControl = (e, RegularExpression, MaxCharacters) => {
  let value = e.target.value.replace(RegularExpression, '').toLowerCase();
  value = value.substring(0, MaxCharacters);
  e.target.value = value;
};

export const MoneyInputControl = (e, RegularExpression, MaxCharacters) => {
  let rawValue = e.target.value.replace(RegularExpression, '');
  rawValue = rawValue.substring(0, MaxCharacters);
  const formattedValue = formatCurrency(rawValue);

  e.target.value = formattedValue;
};
