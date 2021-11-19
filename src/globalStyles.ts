import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Calibri";
        src: url("/assets/fonts/calibri.ttf") format("truetype");
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Calibri, sans-serif;
    }
    
    :root {
      --spacing: 10px;
      
      --black: 0, 0, 0;
      --white: 255, 255, 255;

      --menu-zIndex: 9999;
    }

    html {
        font-size: 10px;
    }
`;

export default GlobalStyles;
