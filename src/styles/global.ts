import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SFProDisplay';
    src: local('SFProDisplay'), url(../assets/fonts/SFProDisplay.ttf) format('truetype');
  }

  @font-face {
    font-family: 'SFProText';
    src: local('SFProText'), url(../assets/fonts/SFProText.ttf) format('truetype');
  }

  :root {
    --background: #F2F2F2;
    --red: #FE6A78;
    --black: #3F4043;

    --input-placeholder: #54565A;
    --input-background:  #FDFCFC;

    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'SFProDisplay', sans-serif;
    color: var(--black);
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [aria-disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
