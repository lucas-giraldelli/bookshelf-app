import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  height: 8.688rem;
  max-width: 100%;
  padding: 0 1.25rem;
  overflow-x: auto;

  a {
    display: block;
    text-decoration: none;
    overflow: hidden;

    position: relative;
    z-index: 5;
    color: #FFF;

    min-width: 270px;
    height: 100%;

    font-size: 2rem;

    & + a {
      margin-left: 0.625rem;
    }

    .shell {
      // MIMICKING LINK CONTAINER JUST FOR COLORING
      position: relative;
      background-color: var(--discover-blue);
      z-index: -2;
      height: 100%;
      width: 100%;

      border-radius: 0.3125rem;
      padding: 1.25rem;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      // GLOBAL POSITIONING
      h2, p, div, span {
        position: relative;
        z-index: 2;
      }

      // TITLE
      h2 {
        font-size: 80%;
        line-height: 2.25rem;
        max-width: 65%;
      }

      // AUTHORS
      p {
        font-size: 0.875rem;
        font-style: italic;
      }

      // LITTLE INFO TEXT
      div {
        display: flex;
        align-items: center;

        text-decoration: none;

        span {
          color: #FFF;
          font-size: 0.8rem;
          margin-left: 5px;
        }

        img {
          position: relative;
        }
      }

      // IMAGE GLOBALS
      img {
        position: absolute;
        z-index: 1;
      }

      // EACH IMAGE ADORMENTS
      & > img:first-child {
        left: -9.19%;
        right: 62.5%;
        top: 17.99%;
        bottom: -9.35%;
      }

      & > img:nth-child(2) {
        left: 52.94%;
        right: 40.44%;
        top: 10.07%;
        bottom: 76.98%;
      }

      & > img:nth-child(3) {
        left: 61.95%;
        right: 25.97%;
        top: 2.73%;
        bottom: 76.97%;
      }

      & > img:nth-child(4) {
        left: 53.37%;
        right: 29.72%;
        top: 68.7%;
        bottom: 28.42%;
      }

      & > img:last-child {
        z-index: -1;
        height: 109px;
        width: 72px;
        right: 1.5rem;
      }
    }
  }
`;
