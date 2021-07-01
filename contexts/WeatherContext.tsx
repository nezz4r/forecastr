import {
  useContext,
  useState,
  createContext,
  ReactNode,
  useEffect,
} from 'react';
import { useCity } from '@contexts/CityContext';
import { fetchWeatherData } from '@libs/fetch';

const WeatherContext = createContext(null);

export function useWeather() {
  return useContext(WeatherContext);
}

interface Props {
  children?: ReactNode;
  props?: any;
}

export default function WeatherProvider({ children, ...props }: Props) {
  const [weatherData, setWeatherData] = useState('');
  const { city } = useCity();

  useEffect(() => {
    if (city !== '') {
      fetchWeatherData(city.id).then((data) => {
        console.log(data);
      });
    }
  }, [city]);

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        setWeatherData,
      }}
      {...props}
    >
      {children}
    </WeatherContext.Provider>
  );
}
