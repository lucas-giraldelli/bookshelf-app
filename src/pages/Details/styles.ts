import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  button {
    position: absolute;
    top: 55px;
    left: 33px;
    z-index: 1;

    border: none;
    background-color: transparent;

    svg {
      font-size: 1.5rem;
    }
  }

  .header__container {
    display: flex;
    justify-content: center;

    position: relative;

    img:first-child {
      position: absolute;
      z-index: -1;

      width: 100%;
    }

    img:last-child {
      margin-top: 5.25rem;

    }
  }

  .main__container {
    margin-top: 2rem;
    padding: 0 1.25rem;

    .main__title {
      font-size: 1.5rem;
    }

    .main__author {
      font-size: 1rem;
      color: var(--red);
    }

    .main__description {
      font-size: 0.875rem;
    }
  }

`