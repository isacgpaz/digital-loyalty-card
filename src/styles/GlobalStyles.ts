import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root {
    --black: #191919;
    --white: #FFFFFF;
    --red: #FF3927;
    --yellow: #FFAD00;
    --orange: #FF4D00;
    --green: #06BF51;
    --green-light: #06BF87;
    --gray: #E6E6E6;
    --gray-dark: #5E5E5E;
  }
  body, input, textarea, button {
    font: 400 14px "Roboto", sans-serif;
  }
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 82.5%;
    }
  }
  body{
    background: var(--black);
  }
  button {
    cursor: pointer;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`