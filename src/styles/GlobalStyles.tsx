import { createGlobalStyle } from 'styled-components';
import img from "../assets/Background.jpg";

const GlobalStyle = createGlobalStyle`
  * {
//    font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif, 'Comic Sans', cursive;
    box-sizing: border-box;
  }
  body {
    background-image: url(${img});
  }
`;

export default GlobalStyle;