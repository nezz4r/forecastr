import { CityInput } from '@components/CityInput';
import { WeatherForecast } from '@components/WeatherForecast';
import { useWeather } from '@contexts/WeatherContext';
import { LoadingIcon } from '@components/Icons';

import Head from 'next/head';

export default function Home() {
  const { weatherData } = useWeather();
  return (
    <>
      <Head>
        <title>Forecastr</title>
      </Head>
      <CityInput />
      {weatherData ? (
        <WeatherForecast />
      ) : (
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <LoadingIcon style={{ fontSize: 30 }} />
        </div>
      )}
    </>
  );
}

// export async function getServerSideProps(context) {}
