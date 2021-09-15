import React from 'react';
import Menu from '../Menu';

import { Container, Body } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Menu />
      <Body>{children}</Body>
    </Container>
  );
};

export default Layout;
