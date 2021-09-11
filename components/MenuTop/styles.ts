import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  top: 0;
  display: flex;
  align-items: center;
  width: 100vw;
  background: #26282A;
  border-bottom: 1px solid #000000;
  padding: 20px 25px;
  z-index: 1 !important;

  div > h1 {
    font-style: normal;
    font-weight: 300;
    font-size: 1.5rem;
    line-height: 22px;
    color: #FFFFFF;
  }

  div > h3 {
    font-style: normal;
    font-weight: 200;
    font-size: 1.3rem;
    line-height: 17px;
    color: #FFFFFF;
    margin-top: 0.4rem
  }
`;

export const Titles = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.8rem;
`;

export const OpenMenuButton = styled.button`
  background-color: transparent;
  border: 0;
  font-size: 2rem;
  margin-left: auto;
  color: white;

  &:hover {
    color: whitesmoke
  }
`;

export const MenuData = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background: #26282A;
  height: 100vh;
  width: 100vw;
`;

export const MenuDataItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuDataItem = styled.button`
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 29px;
  color: #FFFFFF;
  border: 0;
  background-color: transparent;
  margin-bottom: 2rem;

  &:hover {
    color: whitesmoke;
  }
`;
