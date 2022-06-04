import React from 'react';
import SectionTitle from '../SectionTitle';
import Post from "../../types/post";

import { Container, PostItemContainer} from './styles';
import Link from 'next/link';
import PostItem from '../PostItem';

interface LastPostsProps {
  posts: Post[];
}

const LastPosts: React.FC<LastPostsProps> = ({posts}) => {
  
  return (
    <Container>
      <SectionTitle>Publicadas recentemente</SectionTitle>
      {posts.map(item => (
      <Link key={item.slug} as={`/posts/${item.slug}`} href="/posts/[slug]">
        <PostItemContainer>
          <PostItem title={item.title} description={item.excerpt} />
        </PostItemContainer>
      </Link>
      ))}
    </Container>
  );
}

export {LastPosts};