import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 1.875rem;
  background-color: #EEF5DB;
  border-radius: 0px 3px 3px 0px;
  position: relative;

  height: 100px;
  width: calc(100% - 2.75rem);
  padding-left: 1.188rem;

  div {
    & > img:first-child {
      position: absolute;
      top: -15px;
    }

    div {
      font-family: 'SFProDisplay';
      font-weight: 700;

      position: absolute;
      left: 7.375rem;

      & > span {
        display: flex;
        margin-top: 1.25rem;

        font-weight: 400;

        span {
          font-weight: 700;
          color: #FF6978;
        }
      }
    }
  }
`;
