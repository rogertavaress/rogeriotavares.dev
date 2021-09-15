import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  min-height: 10rem;
  flex-wrap: wrap;
`;

export const SocialButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 5px;
  border: 0;
  background-color: white;
  margin: 3px;
  width: 40px;
  height: 40px;

  &:hover {
    background-color: yellowgreen;

    > svg {
      color: white;
    }
  }
`;
