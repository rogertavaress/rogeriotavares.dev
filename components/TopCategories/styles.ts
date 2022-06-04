import styled from "styled-components";

export const Container = styled.section``;

export const Content = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

export const CategoryItem = styled.article`
  background-color: #212e35;
  padding: 4px 15px;
  border-radius: 6px;

  &:hover {
    background-color: blanchedalmond;
    color: #0e151b;
  }
`;
