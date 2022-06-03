import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Menu from '../components/Menu'
import Layout from '../components/layout'
import { getAllPosts, getPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../types/post'
import Hero from '../components/Hero'
import { HomeLayout } from '../layouts/Home'

type Props = {
  lastPosts: Post[]
}

const Index = ({ lastPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Rogério Tavares</title>
        </Head>
        <Container>
        <Hero />
        <HomeLayout posts={lastPosts} />
          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  // const allPosts = getAllPosts([
  //   'title',
  //   'date',
  //   'slug',
  //   'author',
  //   'coverImage',
  //   'excerpt',
  // ])

  const lastPosts = getPosts(0, [
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { lastPosts },
  }
}
