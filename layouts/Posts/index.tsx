import Link from 'next/link';
import React from 'react';
import PostItem from '../../components/PostItem';
import SectionTitle from '../../components/SectionTitle';
import Post from "../../types/post";

import { Container, PostsArea, PostItemContainer } from './styles';

interface PostsLayoutProps {
  posts: Post[];
}

const PostsLayout: React.FC<PostsLayoutProps> = ({posts}) => {
  return (
    <Container>
      <SectionTitle>Minhas publicações</SectionTitle>
      <PostsArea>
        {posts.map(item => (
          <Link key={item.slug} as={`/posts/${item.slug}`} href="/posts/[slug]">
            <PostItemContainer>
              <PostItem title={item.title} description={item.excerpt} />
            </PostItemContainer>
          </Link>
        ))}
      </PostsArea>
    </Container>
  );
}

export default PostsLayout;