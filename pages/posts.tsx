import Head from 'next/head';
import React from 'react';
import Container from '../components/container';
import Hero from '../components/Hero';
import Layout from '../components/layout';
import PostsLayout from '../layouts/Posts';
import { getAllPosts } from '../lib/api';
import Post from "../types/post"

type Props = {
  posts: Post[]
}

const Posts = ({ posts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Rogério Tavares - Minhas publicações</title>
        </Head>
        <Container>
          <Hero />
          <PostsLayout posts={posts} />
        </Container>
      </Layout>
    </>
  );
}

export default Posts;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { posts: allPosts },
  }
}
