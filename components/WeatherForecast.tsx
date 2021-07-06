import { DivProps } from 'react-html-props';
import { useWeather } from '@contexts/WeatherContext';
import { useCity } from '@contexts/CityContext';
import { WeatherIcon } from '@components/WeatherIcon';
import { getHours, getDate } from '@libs/date';
import {
  MainTitle,
  SectionTitle,
  Container,
  ColumnDiv,
  RowDiv,
  Span,
  Separator
} from '@styles/components/WeatherForecast';

export function WeatherForecast({ children, ...props }: DivProps) {
  const { weatherData, isMetric } = useWeather();
  const { city } = useCity();
  const { current, hourly, daily } = weatherData.weather;
  const unit = isMetric ? '°C' : '°F';

  return (
    <Container>
      <MainTitle>{`${city.name || weatherData.city}  `}</MainTitle>
      <RowDiv>
        <ColumnDiv>
          <WeatherIcon style={{ fontSize: 45 }} name={weatherData.main} />
          <Span>
            {`${daily[0].temp.max.toFixed(0)}${unit} 
        | ${daily[0].temp.min.toFixed(0)}${unit}`}
          </Span>
        </ColumnDiv>
        <ColumnDiv style={{ alignItems: 'flex-start' }}>
          <Span>
            {`Feels like:
            ${current.feels_like}
            ${unit}`}
          </Span>
          <Span>{`Humidity: ${current.humidity} %`}</Span>
          <Span>{`Pressure: ${current.pressure} hPa`}</Span>
          <Span>
            {`Wind speed: ${current.wind_speed}   ${isMetric ? 'm/s' : 'mph'}`}
          </Span>
        </ColumnDiv>
      </RowDiv>
      <Separator />
      <SectionTitle>Today</SectionTitle>
      <RowDiv>
        {hourly.map((item, index) => {
          if (index < 7) {
            return (
              <ColumnDiv key={item.dt}>
                <Span>{index === 0 ? 'Now' : getHours(item.dt, isMetric)}</Span>

                <Span>
                  {item.temp.toFixed(0)}
                  {unit}
                </Span>
              </ColumnDiv>
            );
          }
          return null;
        })}
      </RowDiv>
      <Separator />
      <SectionTitle>This week</SectionTitle>
      <RowDiv>
        {daily.map((item, index) => {
          if (index < 7) {
            return (
              <ColumnDiv key={item.dt}>
                <Span>
                  {index === 0 ? 'Today' : getDate(item.dt, isMetric)}
                </Span>
                <WeatherIcon
                  style={{ fontSize: 24 }}
                  name={item.weather[0].main}
                />
                <Span>
                  {`${item.temp.max.toFixed(0)}
                  ${unit} | ${item.temp.min.toFixed(0)}
                  ${unit}`}
                </Span>
              </ColumnDiv>
            );
          }
          return null;
        })}
      </RowDiv>
    </Container>
  );
}
