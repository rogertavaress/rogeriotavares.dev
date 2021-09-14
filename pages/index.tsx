import { getAllPosts } from '../lib/api'
import Post from '../types/post'
import Layout from '../components/Layout'
import PostItem from '../components/PostItem'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <Layout>
      {allPosts.map(item => (
        <PostItem post={item} key={item.slug} />
      ))}
    </Layout>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tags'
  ])

  return {
    props: { allPosts },
  }
}
