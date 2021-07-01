import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@styles/global';
import theme from '@styles/theme';
import CityProvider from '@contexts/CityContext';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CityProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </CityProvider>
    </ThemeProvider>
  );
}

export default App;
