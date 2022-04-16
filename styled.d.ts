import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    border: {
      radius: '0.5rem';
    };
    screen: {
      container: '130rem';
      gutter: '3.2rem';
    };
    font: {
      family: "'Montserrat', sans-serif";
      light: 300;
      normal: 400;
      semiBold: 600;
      bold: 700;
      black: 800;
      sizes: {
        xsmall: '1.2rem';
        small: '1.4rem';
        medium: '1.6rem';
        large: '1.8rem';
        xlarge: '2.0rem';
        xxlarge: '2.8rem';
        huge: '3.2rem';
        xhuge: '4.0rem';
        xxhuge: '4.8rem';
      };
    };
    colors: {
      primary: '#E08700',
      secondary: '#372937',
      white: '#EEEEEE',
      black: '#020202',
      darkGray: '#9D9C9B',
      lightGray: '#D6D6D6'
    };
    spacings: {
      xxxsmall: '0.4rem';
      xxsmall: '0.8rem';
      xsmall: '1.6rem';
      small: '2.4rem';
      medium: '3.2rem';
      large: '4.0rem';
      xlarge: '4.8rem';
      xxlarge: '5.6rem';
      huge: '6.4rem';
      xhuge: '7.2rem';
      xxhuge: '9.6rem';
    };
    layers: {
      base: 10;
      menu: 20;
      overlay: 30;
      modal: 40;
      alwaysOnTop: 50;
    };
  }
}