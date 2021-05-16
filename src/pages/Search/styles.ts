import styled from 'styled-components';

export const Container = styled.main`
  padding: 0 1.25rem;
  display: grid;
  grid-template-columns: repeat(3, 115px);
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
