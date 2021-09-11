import ImagemProfile from '../ImagemProfile';

import { Container, Titles, OpenMenuButton, MenuData, MenuDataItems, MenuDataItem } from './styles';
import {RiMenu3Fill, RiCloseLine} from "react-icons/ri"
import { useState } from 'react';

const MenuTop = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <>
    <Container>
      <ImagemProfile />
      <Titles>
        <h1>Rogério Tavares</h1>
        <h3>Mobile Developer</h3>
      </Titles>
      <OpenMenuButton onClick={() => setIsOpen(old => !old)}>
        {isOpen ? <RiCloseLine/>: <RiMenu3Fill/>}
      </OpenMenuButton>
    </Container>
    {isOpen && (
      <MenuData>
        <MenuDataItems>
          <MenuDataItem>Home</MenuDataItem>
          <MenuDataItem>Sobre Mim</MenuDataItem>
          <MenuDataItem>Resumé</MenuDataItem>
        </MenuDataItems>
      </MenuData>
    )}
  </>
  );
}

export default MenuTop;