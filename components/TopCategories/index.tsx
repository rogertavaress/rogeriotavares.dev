import React from 'react';
import SectionTitle from '../SectionTitle';

import { Container, Content, CategoryItem } from './styles';

const TopCategories: React.FC = () => {
  return (
    <Container>
      <SectionTitle>PRINCIPAIS CATEGORIAS</SectionTitle>
      <Content>
        <CategoryItem>Swift</CategoryItem>
        <CategoryItem>Javascript</CategoryItem>
        <CategoryItem>Carreira</CategoryItem>
        <CategoryItem>SwiftUI</CategoryItem>
        <CategoryItem>Node</CategoryItem>
        <CategoryItem>React Native</CategoryItem>
      </Content>
    </Container>
  );
}

export default TopCategories;