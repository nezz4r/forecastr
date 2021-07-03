import { useEffect, useState } from 'react';
import { InputProps } from 'react-html-props';
import { fetchCitiesList } from '@libs/fetch';
import { CitiesList } from '@components/CitiesList';
import { useCity } from '@contexts/CityContext';

export function CityInput({ children, ...props }: InputProps) {
  const [value, setValue] = useState('');
  const { setCity, citiesList, setCitiesList } = useCity();

  useEffect(() => {
    if (value !== '') {
      fetchCitiesList(value).then((cities) => {
        setCitiesList(cities);
      });
    } else {
      setCitiesList([]);
    }
  }, [value, setCitiesList]);

  function handleChange(e) {
    e.preventDefault();
    setValue(e.target.value);
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      setCity(citiesList[0]);
      setValue('');
    }
  }

  return (
    <>
      <input
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        type='text'
        {...props}
      />
      {citiesList && (
        <CitiesList
          style={{ color: 'white' }}
          setValue={setValue}
          items={citiesList}
        />
      )}
    </>
  );
}
