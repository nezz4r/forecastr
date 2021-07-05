import styled from 'styled-components';

import { GrClose, GrRefresh } from 'react-icons/gr';

import {
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherNight,
  TiWeatherPartlySunny,
  TiWeatherShower,
  TiWeatherSnow,
  TiWeatherStormy,
  TiWeatherSunny,
  TiWeatherWindyCloudy,
  TiWeatherWindy
} from 'react-icons/ti';

const IconStyleDefault = `
  color: inherit;
  font-size: inherit;
  transform: translateY(5%);
  cursor: pointer;
  `;

const WeatherIconStyle = `
  color: inherit;
  font-size: inherit;
  transform: translateY(5%);
  pointer-events: none;
`;

export const Windy = styled(TiWeatherWindy)`
  ${WeatherIconStyle}
`;

export const WindyCloudy = styled(TiWeatherWindyCloudy)`
  ${WeatherIconStyle}
`;

export const Sunny = styled(TiWeatherSunny)`
  ${WeatherIconStyle}
`;

export const Stormy = styled(TiWeatherStormy)`
  ${WeatherIconStyle}
`;

export const Snow = styled(TiWeatherSnow)`
  ${WeatherIconStyle}
`;

export const Shower = styled(TiWeatherShower)`
  ${WeatherIconStyle}
`;

export const PartlySunny = styled(TiWeatherPartlySunny)`
  ${WeatherIconStyle}
`;

export const Night = styled(TiWeatherNight)`
  ${WeatherIconStyle}
`;

export const Downpour = styled(TiWeatherDownpour)`
  ${WeatherIconStyle}
`;
export const Cloudy = styled(TiWeatherCloudy)`
  ${WeatherIconStyle}
`;

export const CloseIcon = styled(GrClose)`
  ${IconStyleDefault}
`;

export const RefreshIcon = styled(GrRefresh)`
  ${IconStyleDefault}
`;
