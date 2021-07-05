import { DivProps } from 'react-html-props';
import { useWeather } from '@contexts/WeatherContext';
import { useCity } from '@contexts/CityContext';
import { CityName, Container } from '@styles/components/WeatherForecast';
import { WeatherIcon } from '@components/WeatherIcon';

export function WeatherForecast({ children, ...props }: DivProps) {
  const { weatherData } = useWeather();
  const { city } = useCity();
  const { current, hourly, daily, tempUnit, isMetric } = weatherData.weather;

  return (
    <Container>
      <CityName>{`${city.name || weatherData.city}  `}</CityName>
      <br />
      <WeatherIcon style={{ fontSize: 45 }} name={weatherData.main} />
      <br />

      <p>
        {`${daily[0].temp.max.toFixed(0)}${
          isMetric ? '°C' : '°F'
        } | ${daily[0].temp.min.toFixed(0)}${isMetric ? '°C' : '°F'}`}
      </p>
      {isMetric ? '°C' : '°F'}
    </Container>
  );
}
