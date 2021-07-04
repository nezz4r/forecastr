import { createGlobalStyle } from 'styled-components';
import { Reset } from '@styles/reset';

const GlobalStyle = createGlobalStyle`
${Reset}


html,
body {
  font-family: 'Montserrat', sans-serif;
  background: ${({ theme }) => theme.colors.dark}
}

`;

export default GlobalStyle;
