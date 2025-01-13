import { useEffect } from 'react';

const CountrySelect = ({ country }) => {
  useEffect(() => {
    console.log(country);
  }, []);

  return (
    <>
      {country.map((item) => (
        <option value={item.IdDetalleCatalogo}>{item.Descripcion}</option>
      ))}
    </>
  );
};

export default CountrySelect;
