import React from 'react';
import SectionTitle from '../SectionTitle';
import {BsArrowRightShort} from "react-icons/bs"

import { Container, Content, TopProjectsItem } from './styles';

const TopProjects: React.FC = () => {
  return (
    <Container>
      <SectionTitle>Principais Projetos</SectionTitle>
      <Content>
        <TopProjectsItem>
          <BsArrowRightShort />
          React Brave Modal
        </TopProjectsItem>
        <TopProjectsItem>
          <BsArrowRightShort />
          React Brave Modal
        </TopProjectsItem>
        <TopProjectsItem>
          <BsArrowRightShort />
          React Brave Modal
        </TopProjectsItem>
      </Content>
    </Container>
  );
}

export default TopProjects;