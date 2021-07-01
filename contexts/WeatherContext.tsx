import {
  useContext,
  useState,
  createContext,
  ReactNode,
  useEffect,
} from 'react';
import { useCity } from '@contexts/CityContext';
import { fetchWeatherData, fetchWeatherDataFromCoords } from '@libs/fetch';

const WeatherContext = createContext(null);

export function useWeather() {
  return useContext(WeatherContext);
}

interface Props {
  children?: ReactNode;
  props?: any;
}

export default function WeatherProvider({ children, ...props }: Props) {
  const [weatherData, setWeatherData] = useState(null);
  const { city, coords } = useCity();

  useEffect(() => {
    const { lat, lon } = coords;
    if (lat && lon) {
      fetchWeatherDataFromCoords(lat, lon).then((data) => {
        setWeatherData(data);
      });
    }
  }, [coords]);

  useEffect(() => {
    if (city) {
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
