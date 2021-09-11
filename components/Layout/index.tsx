import React from 'react';
import MenuTop from '../MenuTop';

import { Container, Body } from './styles';

const Layout: React.FC = ({children}) => {
  return (
    <Container>
      <MenuTop />
      <Body>
        {children}
      </Body>
    </Container>
  );
}

export default Layout;