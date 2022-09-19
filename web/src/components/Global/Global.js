
import { createGlobalStyle } from 'styled-components';
import Nunito from '../../assets/fonts/Nunito/NunitoSans-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Roboto;
    src: url(${Nunito}) format("truetype");
  }

  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%
  }

  body {
    background-color: #bab2b2;
    font-family: Roboto;
  }
`;

