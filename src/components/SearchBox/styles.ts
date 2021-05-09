import styled from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  position: relative;
  margin: 3.125rem 1.25rem 1.875rem;

  background: var(--input-background);
  border-radius: 0.25rem;
  border: ${(props) => props.isFocused
    ? '2px solid #9ecaed'
    : '2px solid transparent'
  };

  input {
    outline: none;

    max-width: 336px;
    width: 100%;
    height: 3rem;
    padding: 0.9375rem 0;
    margin-left: 2.563rem;

    border: none;
    border-radius: 0.625rem;
    background: var(--input-background);

    &::placeholder {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.125rem;
      font-family: 'SFProText', sans-serif;
      color: var(--input-placeholder);
    }
  }

  img {
    position: absolute;
    top: 0.9375rem;
    left: 0.9375rem;
  }
`;