import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SFProDisplay';
    src: local('SF Pro Display'), url("../assets/fonts/SFProDisplay.ttf") format('truetype');
  }

  @font-face {
    font-family: 'SFProText';
    src: local('SFProText'), url("../assets/fonts/SFProText.ttf") format('truetype');
  }

  :root {
    --background: #F2F2F2;
    --red: #FF6978;
    --black: #3F4043;
    --lightblue: #4ABDF1;

    --nav-links: #BFBEBF;
    --nav-links--active: #000000;

    --discover-blue: #00173D;
    --discover-purple: #451475;

    --input-placeholder: #54565A;
    --input-background:  #FDFCFC;

    /*@media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }*/
  }

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0 0 3.438rem 0;
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'SFProDisplay', 'Poppins';
    color: var(--black);
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  [aria-disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
export const Header = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 1.875rem;
  margin-bottom: 0.9375rem;
  padding: 0 1.25rem;
  line-height: 1.313rem;

  h1 {
    font-size: 1.125rem;
    font-family: 'SFProDisplay', 'Poppins';
  }

  p {
    font-size: 0.875rem;
    color: var(--lightblue);
  }
`;
