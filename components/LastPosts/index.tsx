import React from 'react';
import SectionTitle from '../SectionTitle';
import Post from "../../types/post";

import { Container, PostArea, PostTitle, PostDescription, PostButton } from './styles';

interface LastPostsProps {
  posts: Post[];
}

const LastPosts: React.FC<LastPostsProps> = ({posts}) => {
  
  return (
    <Container>
      <SectionTitle>Publicadas recentemente</SectionTitle>
      {posts?.map(item => (
      <PostArea key={item.slug}>
        <PostTitle>{item.title}</PostTitle>
        <PostDescription>{item.excerpt}</PostDescription>
        <PostButton>Ler mais</PostButton>
      </PostArea>
      ))}
    </Container>
  );
}

export {LastPosts};