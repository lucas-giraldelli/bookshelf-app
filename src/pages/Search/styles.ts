import styled from 'styled-components';

export const ResultsBox = styled.p`
  margin: -1rem 0 0.5rem 0;
  padding: 0 1.25rem;
  font-size: 0.8rem;
  color: #70757a;
`;

export const Container = styled.div`
  margin-bottom: 5rem;
`;

export const GridContainer = styled.main`
  padding: 0 1.25rem;
  display: grid;
  max-width: 150px;
  grid-template-columns: repeat(3, 125%);
  row-gap: 0.75rem;

  a {
    display: block;
    color: (--black);
    text-decoration: none;

    &:visited, &:active {
      color: var(--black);
    }

    img {
      width: 105px;
      height: 153px;
    }

    h1 {
      margin-top: 10px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      overflow: hidden;
      width: 105px;
      font-size: 0.75rem;
    }

    span {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      overflow: hidden;
      width: 105px;
      margin-top: 5px;
      font-size: 0.625rem;
    }
  }
`;

export const Footer = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 37%;
  margin: 1.5rem auto;
  background-color: white;
  border: 1px solid #979797;
  padding: 0 0.5rem;

  svg {
    font-size: 1.2rem;
  }

  button {
    color: var(--black);
    font-weight: 700;
    background: inherit;
    border: none;
    font-size: 1.1rem;
  }
`;
