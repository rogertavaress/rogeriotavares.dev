import styled from "styled-components";

export const Container = styled.section``;

export const PostArea = styled.button`
  margin: 16px 0;
  text-align: left;
  background: none;
  border: 0;
  color: #fff;

  &:hover {
    > h2,
    h4 {
      color: blanchedalmond;
    }

    h4 {
      text-decoration: underline;
    }
  }
`;

export const PostTitle = styled.h2``;

export const PostDescription = styled.p`
  margin: 20px 0 10px;
`;

export const PostButton = styled.h4``;
