import styled from "styled-components";

export const Container = styled.div`
  margin: 16px 0;
  text-align: left;
  background: none;
  border: 0;
  color: #fff;

  > p {
    margin: 20px 0 10px;
  }

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
