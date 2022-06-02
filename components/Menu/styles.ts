import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
  width: 80%;
  margin: 0 auto;
  padding: 15px 0;

  > h1 {
    color: blanchedalmond;
  }
`;

export const PagesArea = styled.div`
  flex: 1;
  display: flex;

  > a {
    color: #fff;
    text-decoration: none;

    & + a {
      margin-left: 15px;
    }
  }
`;

export const ContactsArea = styled.div`
  display: flex;

  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: blanchedalmond;
    padding: 5px;
    color: #0e151b;

    & + a {
      margin-left: 5px;
    }
  }
`;
