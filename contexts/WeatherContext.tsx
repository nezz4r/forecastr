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

  function updateWeatherData() {
    const { lat, lon } = coords;

    if (lat && lon && !city) {
      fetchWeatherDataFromCoords(lat, lon).then((data) => {
        setWeatherData(data);
      });
    }

    if (city) {
      fetchWeatherData(city.id).then((data) => {
        setWeatherData(data);
      });
    }
  }

  useEffect(() => {
    updateWeatherData();
  }, [city, coords]);

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        setWeatherData,
        updateWeatherData,
      }}
      {...props}
    >
      {children}
    </WeatherContext.Provider>
  );
}
