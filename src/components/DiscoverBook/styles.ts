import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  height: 8.688rem;
  max-width: 100%;
  padding: 0 1.25rem;
  overflow-x: auto;

  background-color: transparent; // making the container

  div {
    position: relative;
    background-color: #00173D;
    color: #FFF;
    border-radius: 0.3125rem;

    min-width: 17rem;
    height: 100%;
    padding: 1.25rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      font-size: 1.688rem;
      line-height: 2.25rem;
    }

    p {
      font-style: italic;
    }

    span {
      display: flex;
      align-items: center;
    }

    & + div {
      margin-left: 0.625rem;
    }

    & > img {
      position: absolute;
      width: 72px;
      right: 1.5rem;
    }
  }
`;
