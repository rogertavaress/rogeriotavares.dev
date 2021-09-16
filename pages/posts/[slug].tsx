import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import { CMS_NAME } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';
import PostType from '../../types/post';
import Layout from '../../components/Layout';
import PostHeader from '../../components/PostHeader';
import PostBody from '../../components/PostBody';

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const Post = ({ post, morePosts, preview }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      {router.isFallback ? <h1>Carregando!</h1> : (
        <>
          <PostHeader title={post.title} coverImage={post.coverImage} date={post.date} excerpt={post.excerpt} />
          <PostBody content={post.content} />
        </>
      )}
      <Head>
        <title>Rogério Tavares | {post.title}</title>
        <meta property="og:image" content={post.ogImage.url} />
      </Head>
    </Layout>
    // <Layout preview={preview}>
    //   <Container>
    //     <Header />
    //     {router.isFallback ? (
    //       <PostTitle>Loading…</PostTitle>
    //     ) : (
    //       <>
    //         <article className="mb-32">
    //           <Head>
    //             <title>
    //               {post.title} | Next.js Blog Example with {CMS_NAME}
    //             </title>
    //             <meta property="og:image" content={post.ogImage.url} />
    //           </Head>
    //           <PostHeader
    //             title={post.title}
    //             coverImage={post.coverImage}
    //             date={post.date}
    //             author={post.author}
    //           />
    //           <PostBody content={post.content} />
    //         </article>
    //       </>
    //     )}
    //   </Container>
    // </Layout>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'excerpt'
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map(post => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}
