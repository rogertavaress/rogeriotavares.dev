import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useMemo } from 'react';
import Author from '../../types/author'
import Image from 'next/image';
import { Container } from './styles';

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string;
}

const PostHeader = ({ title, coverImage, date, excerpt }: Props) => {
  const dateFormatted = useMemo(
    () =>
      format(new Date(date), "dd' de 'MMMM' de 'yyyy", {
        locale: ptBR,
      }),
    [date],
  );

  return (
    <Container>
      <span>{dateFormatted}</span>
      <h1>{title}</h1>
      <img src={coverImage} alt="" />
      <p>{excerpt}</p>
    </Container>
  )
}

export default PostHeader