import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  border-radius: 100%;
  width: fit-content;
  padding: 3px;

  div > img {
    width: 4rem;
    border-radius: 100%;

    @media only screen and (min-width: 600px) {
      width: 10rem;
    }
  }
`;
