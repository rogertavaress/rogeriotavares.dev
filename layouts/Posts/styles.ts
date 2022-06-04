import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  width: 80%;
  margin: 5vh auto;
  flex-direction: column;
`;

export const PostsArea = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
`;

export const PostItemContainer = styled.article`
  background-color: #212e35;
  padding: 20px 30px;
  border-radius: 5px;
`;
