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
      --spacing: 5px;
      
      --black: #000;
      --white: #fff;
    }
`;

export default GlobalStyles;
