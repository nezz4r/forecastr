import { ButtonProps } from 'react-html-props';
import { useWeather } from '@contexts/WeatherContext';

export default function UpdateWeatherButton({
  children,
  ...props
}: ButtonProps) {
  const { updateWeatherData } = useWeather();
  return (
    <button {...props} type='button' onClick={() => updateWeatherData()}>
      Update
    </button>
  );
}
