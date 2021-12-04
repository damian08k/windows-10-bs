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
      
      --taskbarHeight: 40px;

      --black: 0, 0, 0;
      --white: 255, 255, 255;
      --grey: 118, 118, 118;
      --hover: rgba(var(--white), 0.2);
      --windowsGreen: 187, 255, 15;

      --desktop-zIndex: 100;
      --plans-zIndex: -1;
    }

    html {
        font-size: 10px;
    }
`;

export default GlobalStyles;
