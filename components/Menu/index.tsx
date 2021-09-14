import ImagemProfile from '../ImagemProfile';
import { useRouter } from 'next/router';
import { Container, Titles, OpenMenuButton, MenuData, MenuDataItems, MenuDataItem } from './styles';
import {RiMenu3Fill, RiCloseLine} from "react-icons/ri"
import { useState } from 'react';

const Menu = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  }

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
          <MenuDataItem onClick={() => handleClick("/")} >Home</MenuDataItem>
          <MenuDataItem onClick={() => handleClick("/")} >Sobre Mim</MenuDataItem>
          <MenuDataItem onClick={() => handleClick("/")} >Resumé</MenuDataItem>
        </MenuDataItems>
      </MenuData>
    )}
  </>
  );
}

export default Menu;