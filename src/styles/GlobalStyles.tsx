import { createGlobalStyle, keyframes } from 'styled-components';
import backgroundImage from '../assets/Background2.jpg';

const waterfallAnimation = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 200%;
  }
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-image: url(${backgroundImage}), url(${backgroundImage});
    background-repeat: repeat-y;
    background-position: 0 0, 0 100%;
    background-size: auto, auto;
    animation: ${waterfallAnimation} 60s linear infinite;
  }
`;

export default GlobalStyle;
