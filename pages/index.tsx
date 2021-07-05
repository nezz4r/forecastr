import { CityInput } from '@components/CityInput';

import { WeatherIcon } from '@components/WeatherIcon';
import { useWeather } from '@contexts/WeatherContext';
import { useCity } from '@contexts/CityContext';

import Head from 'next/head';

export default function Home() {
  const { weatherData } = useWeather();
  const { city } = useCity();

  return (
    <>
      <Head>
        <title>Forecastr</title>
      </Head>
      <CityInput />

      {!city && weatherData
        ? `${weatherData.city}, ${weatherData.country}`
        : null}

      {weatherData && <WeatherIcon name={weatherData.weather.main} />}
      {city ? city.name : null}
    </>
  );
}

// export async function getServerSideProps(context) {}
