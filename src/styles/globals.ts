import { createGlobalStyle } from "styled-components"; 
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  :root {
    /* Main Colors */
    --blue: #5429CC;
    --green: #33CC95;
    --red: #E52E4D;
    --white: #FFFFFF;
    --title: #363F5F;
    --text: #969CB2;
    --background: #F0F2F5;

    /* Button Colors */
    --buttonHeader: #6933FF;
    --buttonIncome: rgba(18, 164, 84, .1);
    --buttonOutcome: rgba(229, 46, 77, .1);

    /* Fonts */
    --font-title: 'Poppins', sans-serif;
  }

  body {
    font-family: var(--font-title);
  }
`
