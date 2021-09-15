import styled from 'styled-components';

export const Container = styled.div`
  padding: 3rem 2rem;

  > img {
    margin-top: 3rem;
    width: 100%;
    height: 350px;
    border-radius: 5px;

    @media only screen and (max-width: 600px) {
      height: 150px;
    }
  }

  > p {
    margin-top: 1rem;
    
    @media only screen and (min-width: 600px) {
      font-size: 1.5rem;
    }
  }
`;
