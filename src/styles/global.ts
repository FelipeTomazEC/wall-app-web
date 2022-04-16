import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
  html {
    font-size: 62.5%;
  }
  html,
  body,
  body > div:first-child {
    height: 100%;
  }

  ${({ theme }) => css`
    body {
      font-family: ${theme.font.family};
      background-color: ${theme.colors.black};
      color: ${theme.colors.white};

      ::before {
        content: ' ';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.5;
        background-image: url('/background.jpg');
        background-repeat: no-repeat;
        background-position: 50% 0;
        background-size: cover;
        z-index: 1;
      }

      #root {
        position: absolute;
        z-index: ${theme.layers.base};
      }
    }
  `}
`