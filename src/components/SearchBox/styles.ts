import styled from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.form<ContainerProps>`
  display: flex;
  align-items: center;
  position: relative;

  height: 3rem;
  max-width: 336px;
  margin: 3.125rem 1.25rem 1.875rem;

  background: var(--input-background);
  border-radius: 0.25rem;
  border: ${(props) => props.isFocused
    ? '2px solid #9ecaed'
    : '2px solid transparent'
  };

  input {
    outline: none;
    width: 100%;
    height: 100%;
    margin-left: 2.563rem;

    border: none;
    border-radius: 0.625rem;
    background: var(--input-background);

    &::placeholder {
      color: var(--input-placeholder);

      font-family: 'SFProText', sans-serif;
      font-size: 1rem;
      line-height: 1.125rem;
    }
  }

  img {
    position: absolute;
    top: 0.8rem;
    left: 0.9375rem;
  }
`;
