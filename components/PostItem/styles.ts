import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 1.8rem 1rem;
  border-bottom: 1px solid black;
`;

export const ImageMain = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: #FF6B00;
`;

export const Content = styled.div`
  margin-left: 1rem;

  > h1 {
    font-size: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    font-weight: 600;
  }

  > p {
    font-size: 1.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-weight: normal;
  }

  > span {
    font-size: 1rem;
    font-weight: 300;
  }
`;


