import styled from 'styled-components';

export const Container = styled.nav`
  color: var(--nav-links);
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4rem;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  background-color: #FFFFFF;
  display: flex;
  overflow-x: auto;

  .nav__link {
    padding: 0.625px;
    color: var(--black);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    flex-grow: 1;

    font-size: 1rem;
    white-space: nowrap;

    min-width: 60px;
    overflow: hidden;
    text-decoration: none;
  }
`;
