import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 600px) {
    /* For tablets: */
    flex-direction: row;
  }
`;

export const Body = styled.div`

  @media only screen and (min-width: 600px) {
    margin-left: 30vw;
  }
`;
