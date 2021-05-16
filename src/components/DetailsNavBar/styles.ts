import styled from 'styled-components';

export const Container = styled.nav`
  color: var(--nav-links);
  position: fixed;
  width: 20rem;
  left: 20px;
  bottom: 3.3rem;
  height: 3.3rem;
  border-radius: 2px;

  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  background-color: #FFFFFF;

  display: flex;
  overflow-x: auto;

  a {
    padding: 0.625px;
    color: var(--black);
    display: flex;
    align-items: center;
    justify-content:center;
    flex-grow: 1;

    font-size: 0.9rem;
    font-weight: 700;
    white-space: nowrap;

    min-width: 60px;
    overflow: hidden;
    text-decoration: none;

    svg {
      color: #CFCBD2;
    }
  }
`;

export const VerticalDivisor = styled.div`
  display: flex;
  align-self: center;
  border-left: 2px solid #CFCBD2;
  height: 16px;
`;

