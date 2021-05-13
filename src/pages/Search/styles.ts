import styled from 'styled-components';

export const Container = styled.main`
  padding: 0 1.25rem;
  display: grid;
  grid-template-columns: repeat(3, 115px);
  row-gap: 0.75rem;

  img {
    width: 105px;
  }

  h1 {
    margin-top: 10px;
    font-size: 0.75rem;
  }

  span {
    margin-top: 5px;
    font-size: 0.625rem;
  }
`;
