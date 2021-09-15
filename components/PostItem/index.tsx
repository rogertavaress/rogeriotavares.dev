import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import React, { useMemo } from 'react';
import Link from 'next/link';
import Post from '../../types/post';

import { Container, ImageMain, Content } from './styles';
import TagGroup from '../TagGroup';

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const dateFormatted = useMemo(
    () =>
      format(new Date(post.date), "dd' de 'MMMM' de 'yyyy", {
        locale: ptBR,
      }),
    [post],
  );
  
  return (
    <Link href={`/posts/${post.slug}`}>
      <Container>
        <div>
          <ImageMain src={post.coverImage} />
        </div>
        <Content>
          <span>{dateFormatted}</span>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <TagGroup tags={post.tags} />
        </Content>
      </Container>
    </Link>
  );
};

export default PostItem;
