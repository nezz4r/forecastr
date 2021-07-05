import { CityInput } from '@components/CityInput';

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Forecastr</title>
      </Head>
      <CityInput />
    </>
  );
}

// export async function getServerSideProps(context) {}
