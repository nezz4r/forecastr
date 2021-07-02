import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  // eslint-disable-next-line
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      light: string;
      dark: string;
    };
    breakpoints: {
      large: string;
      medium: string;
      small: string;
    };
  }
}

export const lightTheme: DefaultTheme = {
  colors: {
    primary: '#2F97C1',
    secondary: '#15E6CD',
    light: '#efefef',
    dark: '#333333',
  },
  breakpoints: {
    large: '1024px',
    medium: '768px',
    small: '375px',
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    primary: '#2F97C1',
    secondary: '#15E6CD',
    light: '#efefef',
    dark: '#333333',
  },
  breakpoints: {
    large: '1024px',
    medium: '768px',
    small: '375px',
  },
};
