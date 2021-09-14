import React from 'react';

import { Container, TagItem } from './styles';

interface TagGroupProps {
  tags: [string]
}

const TagGroup: React.FC<TagGroupProps> = ({tags}) => {
  return (
    <Container>
      {tags.map((item, index)=> (
        <TagItem key={item + index}>{item}</TagItem>
      ))}
    </Container>
  );
}

export default TagGroup;