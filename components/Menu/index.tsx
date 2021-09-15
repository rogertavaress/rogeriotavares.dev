import React from 'react';
import MenuDesktop from '../MenuDesktop';
import MenuMobile from '../MenuMobile';

// import { Container } from './styles';

const Menu: React.FC = () => {
  return (
    <>
      <MenuMobile />
      <MenuDesktop />
    </>
  );
}

export default Menu;