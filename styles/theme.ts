import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  // eslint-disable-next-line
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      light: string;
      dark: string;
      background: string;
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
    primary: '#15E6CD',
    secondary: '#2F97C1',
    light: '#fff',
    dark: '#333333',
    background: '#efefef'
  },
  breakpoints: {
    large: '1024px',
    medium: '768px',
    small: '375px'
  }
};

export const darkTheme: DefaultTheme = {
  colors: {
    primary: '#F1AB86',
    secondary: '#C57B57',
    light: '#efefef',
    dark: '#333333',
    background: '#222'
  },
  breakpoints: {
    large: '1024px',
    medium: '768px',
    small: '375px'
  }
};
