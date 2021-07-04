import {
  useContext,
  useState,
  createContext,
  ReactNode,
  useEffect,
  useCallback
} from 'react';
import { useCity } from '@contexts/CityContext';
import { fetchWeatherData } from '@libs/fetch';

const WeatherContext = createContext(null);

export function useWeather() {
  return useContext(WeatherContext);
}

interface Props {
  children?: ReactNode;
}

export default function WeatherProvider({ children }: Props) {
  const [weatherData, setWeatherData] = useState(null);
  const [isMetric, setMetric] = useState(true);
  const { city, coords } = useCity();

  const updateWeatherData = useCallback(() => {
    const { lat, lon } = coords;

    if (lat && lon && !city) {
      fetchWeatherData([lat, lon], isMetric).then((data) => {
        setWeatherData(data);
      });
    }

    if (city) {
      fetchWeatherData(city.id, isMetric).then((data) => {
        setWeatherData(data);
      });
    }
  }, [city, coords, isMetric]);

  useEffect(() => {
    const minutes = 5;
    const interval = setInterval(() => {
      updateWeatherData();
    }, 1000 * 60 * minutes);
    return () => clearInterval(interval);
  }, [updateWeatherData]);

  useEffect(() => {
    updateWeatherData();
  }, [city, coords, updateWeatherData]);

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        setWeatherData,
        updateWeatherData,
        isMetric,
        setMetric
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
