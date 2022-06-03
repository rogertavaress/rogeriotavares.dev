import React from 'react';
import { LastPosts } from '../../components/LastPosts';
import Post from "../../types/post";

import { Container, LastPostsArea, HelperItemsArea } from './styles';

interface HomeLayoutProps {
  posts: Post[];
}

const HomeLayout: React.FC<HomeLayoutProps> = ({posts}) => {
  return (
    <Container>
      <LastPostsArea>
        <LastPosts posts={posts} />
      </LastPostsArea>
      <HelperItemsArea>
        <></>
      </HelperItemsArea>
    </Container>
  );
}

export {HomeLayout};