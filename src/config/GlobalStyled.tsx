import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
    * {
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        overflow-x: hidden;
        background: radial-gradient(circle, hsla(357, 85%, 52%, 1) 0%, hsla(0, 0%, 0%, 1) 100%);
    }

    .scale-up-center {
      transition: 0.2s linear;
    }

    .scale-up-center:hover {
      transform: scale(1.1);
    }
`;

export default GlobalStyled;
