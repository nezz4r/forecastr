import { FunctionComponent, useEffect } from 'react';
import fetch from '@libs/fetch';
import useLocalStorage from '@hooks/useLocalStorage';
import { CitiesList } from '@components/CitiesList';

interface CityInputProps {}

export const CityInput: FunctionComponent<CityInputProps> = ({
  children,
  ...props
}) => {
  const [city, setCity] = useLocalStorage('city', '');
  const [citiesList, setCitiesList] = useLocalStorage('citiesList', []);

  useEffect(() => {
    fetch();
  }, [city, citiesList]);

  function handleChange(e) {
    e.preventDefault();
    setCity(e.target.value);
  }

  return (
    <div>
      <input value={city} onChange={handleChange} {...props} type='text' />
      {citiesList || <CitiesList items={citiesList} />}
    </div>
  );
};
