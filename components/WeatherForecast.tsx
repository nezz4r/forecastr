import { DivProps } from 'react-html-props';
import { useWeather } from '@contexts/WeatherContext';
import { useCity } from '@contexts/CityContext';
import { CityName, Container } from '@styles/components/WeatherForecast';
import { WeatherIcon } from '@components/WeatherIcon';
import { getTime } from '@libs/getTime';

export function WeatherForecast({ children, ...props }: DivProps) {
  const { weatherData, isMetric } = useWeather();
  const { city } = useCity();
  const { current, hourly, daily, tempUnit } = weatherData.weather;
  const unit = isMetric ? '°C' : '°F';

  return (
    <Container>
      <CityName>{`${city.name || weatherData.city}  `}</CityName>
      <br />
      <WeatherIcon style={{ fontSize: 45 }} name={weatherData.main} />
      <br />

      <p>
        {`${daily[0].temp.max.toFixed(0)}${unit} 
        | ${daily[0].temp.min.toFixed(0)}${unit}`}
      </p>
      <br />
      <br />
      <div style={{ display: 'flex' }}>
        {hourly.map((item, index) => {
          if (index < 5) {
            return (
              <div
                style={{
                  display: 'flex',
                  width: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column'
                }}
              >
                <span>{getTime(item.dt, isMetric)}</span>
                <br />
                <span>
                  {item.temp.toFixed(0)}
                  {unit}
                </span>
              </div>
            );
          }
          return null;
        })}
      </div>
    </Container>
  );
}
