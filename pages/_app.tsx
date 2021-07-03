import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@styles/global';
import { darkTheme } from '@styles/theme';
import CityProvider from '@contexts/CityContext';
import WeatherProvider from '@contexts/WeatherContext';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CityProvider>
        <WeatherProvider>
          <GlobalStyles />
          <Component {...pageProps} />
        </WeatherProvider>
      </CityProvider>
    </ThemeProvider>
  );
}

export default App;
