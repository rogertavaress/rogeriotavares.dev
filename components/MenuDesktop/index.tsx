import ImagemProfile from '../ImagemProfile';
import { useRouter } from 'next/router';
import {
  Container,
  Titles,
  MenuData,
  MenuDataItem,
} from './styles';
import { RiMenu3Fill, RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';
import SocialArea from '../SocialArea';

const MenuDesktop = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  return (
    <Container>
      <ImagemProfile />
      <Titles>
        <h1>Rogério Tavares</h1>
        <h3>Mobile Developer</h3>
      </Titles>
      <MenuData>
        <MenuDataItem onClick={() => handleClick('/')}>Home</MenuDataItem>
        <MenuDataItem onClick={() => handleClick('/')}>
          Sobre Mim
        </MenuDataItem>
        <MenuDataItem onClick={() => handleClick('/')}>Resumé</MenuDataItem>
      </MenuData>
      <SocialArea />
    </Container>
  );
};

export default MenuDesktop;
