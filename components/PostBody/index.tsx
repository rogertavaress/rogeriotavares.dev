import React from 'react';

import {Container} from './styles';

type Props = {
  content: string
}

const PostBody: React.FC<Props> = ({ content }) => {
  return <Container
    dangerouslySetInnerHTML={{ __html: content }}
  />;
}

export default PostBody;