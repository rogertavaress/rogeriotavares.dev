import React from 'react';
import Link from 'next/link';
import {RiTwitterLine, RiLinkedinLine, } from "react-icons/ri"
import {HiOutlineMail} from "react-icons/hi"

import { Container, PagesArea, ContactsArea } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <h1>Rogério Tavares</h1>
      <PagesArea>
        <Link href="/posts">Publicações</Link>
        <Link href="/projects">Projetos</Link>
        <Link href="/resume">Resumé</Link>
      </PagesArea>
      <ContactsArea>
        <a target="_blank" href="https://twitter.com/rogertavaress"><RiTwitterLine /></a>
        <a target="_blank" href="https://www.linkedin.com/in/rogertavaress"><RiLinkedinLine /></a>
        <a target="_blank" href="mailto:contact@rogeriotavares.dev"><HiOutlineMail /></a>
      </ContactsArea>

    </Container>
  );
}

export default Menu;