import React from 'react';
import Menu from '../Menu';

import { Container, Profile } from './styles';

const Hero: React.FC = () => {
  return (
    <Container>
      <Menu />
      <Profile src="/assets/others/profileemoji.png" />
    </Container>
  );
}

export default Hero;