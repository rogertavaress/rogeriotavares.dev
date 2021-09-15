import styled from 'styled-components';

export const Container = styled.section`
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 30vw;
  min-height: 100vh;
  background: #26282a;
  border-right: 1px solid #000000;
  padding: 20px 25px;
  z-index: 1 !important;

  div > h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.5rem;
    color: #ffffff;
    text-align: center;
  }

  div > h3 {
    font-style: normal;
    font-weight: 200;
    font-size: 1.5rem;
    line-height: 2rem;
    color: #ffffff;
    margin-top: 1.4rem;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const Titles = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  align-items: center;
`;

export const MenuData = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #26282a;
  flex-direction: column;
`;

export const MenuDataItem = styled.button`
  font-style: normal;
  font-weight: normal;
  font-size: 2.5rem;
  line-height: 5rem;
  color: #ffffff;
  border: 0;
  background-color: transparent;
  margin-bottom: 1.2rem;

  &:hover {
    color: yellowgreen;
  }
`;
