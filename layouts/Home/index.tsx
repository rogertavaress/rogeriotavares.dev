import React from 'react';
import { LastPosts } from '../../components/LastPosts';
import TopCategories from '../../components/TopCategories';
import TopProjects from '../../components/TopProjects';
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
        <TopCategories />
        <TopProjects />
      </HelperItemsArea>
    </Container>
  );
}

export {HomeLayout};