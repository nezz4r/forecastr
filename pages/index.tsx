import { CityInput } from '@components/CityInput';
import { WeatherForecast } from '@components/WeatherForecast';
import { useWeather } from '@contexts/WeatherContext';

import Head from 'next/head';

export default function Home() {
  const { weatherData } = useWeather();
  return (
    <>
      <Head>
        <title>Forecastr</title>
      </Head>
      <CityInput />
      {weatherData && (
        <div>
          <WeatherForecast />
        </div>
      )}
    </>
  );
}

// export async function getServerSideProps(context) {}
