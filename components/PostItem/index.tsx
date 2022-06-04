import React from 'react';

import { Container } from './styles';

interface PostItem {
  title: string;
  description: string;
}

const PostItem: React.FC<PostItem> = ({title, description}) => {
  return (
    <Container>
      <h2>{title}</h2>
      <p>{description}</p>
      <h4>Ler mais</h4>
    </Container>
  );
}

export default PostItem;