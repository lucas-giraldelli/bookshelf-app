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

    position: relative;
    background-color: #00173D;
    color: #FFF;
    border-radius: 0.3125rem;

    min-width: 270px;
    height: 100%;
    padding: 1.25rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    font-size: 2rem;

    h2 {
      font-size: 80%;
      line-height: 2.25rem;
      max-width: 65%;
    }

    p {
      font-size: 0.875rem;
      font-style: italic;
    }

    div {
      display: flex;
      align-items: center;

      text-decoration: none;

      span {
        color: #FFF;
        font-size: 0.8rem;
        margin-left: 5px;
      }
    }

    & + a {
      margin-left: 0.625rem;
    }

    & > img {
      position: absolute;
      width: 72px;
      right: 1.5rem;
    }
  }
`;
