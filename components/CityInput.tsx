import {
  useEffect,
  useState,
  ChangeEventHandler,
  KeyboardEventHandler
} from 'react';
import { InputProps } from 'react-html-props';
import { fetchCitiesList } from '@libs/fetch';
import { CitiesList } from '@components/CitiesList';
import { useCity } from '@contexts/CityContext';
import { useWeather } from '@contexts/WeatherContext';
import {
  Button,
  Input,
  Wrapper,
  InputWrapper
} from '@styles/components/CityInput';
import { RefreshIcon } from '@components/Icons';

export function CityInput({ children, ...props }: InputProps) {
  const [value, setValue] = useState('');
  const { setCity, citiesList, setCitiesList } = useCity();
  const { updateWeatherData, isMetric, setMetric } = useWeather();

  useEffect(() => {
    if (value !== '') {
      fetchCitiesList(value).then((cities) => {
        setCitiesList(cities);
      });
    } else {
      setCitiesList([]);
    }
  }, [value, setCitiesList]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleKeyPress: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setCity(citiesList[0]);
      setValue('');
    }
  };

  return (
    <Wrapper>
      <InputWrapper>
        <Input
          placeholder="Search for a city..."
          aria-label="City Input"
          value={value}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          type="text"
          style={props.style}
        />
        <CitiesList setValue={setValue} cities={citiesList} />
      </InputWrapper>
      <Button onClick={updateWeatherData}>
        <RefreshIcon />
      </Button>
      <Button onClick={() => setMetric((current) => !current)}>
        {isMetric ? '°C' : '°F'}
      </Button>
    </Wrapper>
  );
}
