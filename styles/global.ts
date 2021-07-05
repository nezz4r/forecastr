import { createGlobalStyle } from 'styled-components';
import { Reset } from '@styles/reset';

const GlobalStyle = createGlobalStyle`
${Reset}


html,
body {
  padding: 10px;
  font-family: 'Montserrat', sans-serif;
  background: ${({ theme }) => theme.colors.background};
  
  color: ${({ theme }) => theme.colors.light}
}

`;

export default GlobalStyle;
