import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0;
  flex-direction: column;
  align-items: flex-end;
  background: linear-gradient(rgba(33, 46, 53, 0.6), rgba(33, 46, 53, 0.6)),
    url("/assets/others/backgroundhero.jpeg");
  background-size: cover;
`;

export const Profile = styled.img`
  margin-right: 15vw;
  height: 30vh;
`;
