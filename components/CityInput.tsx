import { FunctionComponent, useEffect, useState } from 'react';
import { fetchCitiesList } from '@libs/fetch';
import { CitiesList } from '@components/CitiesList';
import { useCity } from '@contexts/CityContext';

interface CityInputProps {}

export const CityInput: FunctionComponent<CityInputProps> = ({
  children,
  ...props
}) => {
  const [value, setValue] = useState('');
  const { setCity, citiesList, setCitiesList } = useCity();

  useEffect(() => {
    fetchCitiesList(value)
      .then((data) => data.predictions.map((city) => city.description))
      .then((cities) => {
        setCitiesList(cities);
      });
    return () => {
      setCitiesList([]);
    };
  }, [value, setCitiesList]);

  function handleChange(e) {
    e.preventDefault();
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setCity(citiesList[0]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={handleChange} {...props} type='text' />
      <CitiesList items={citiesList} />
    </form>
  );
};
