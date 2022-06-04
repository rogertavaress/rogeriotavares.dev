import styled from "styled-components";

export const Container = styled.section`
  margin-top: 35px;
`;

export const Content = styled.div``;

export const TopProjectsItem = styled.article`
  display: flex;
  align-items: center;
  margin: 15px 0;

  > svg {
    margin-right: 10px;
  }

  &:hover {
    color: blanchedalmond;
    text-decoration: underline;
  }
`;
