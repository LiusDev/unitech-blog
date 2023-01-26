import Head from 'next/head'
import { PostCard, Categories, PostWidget, PageRate } from '../components';
import { getPosts } from '../services'
import { FeaturedPosts } from '../sections';

export default function Home({ posts }) {

  const sortedPosts = (posts) => {
    return posts.sort((a, b) => {
      return new Date(b.node.createdAt) - new Date(a.node.createdAt);
    })
  }
  
  posts = sortedPosts(posts);

  return (
    //TODO split posts into multiple pages
    <div className="container mx-auto px-5 md:px-10 mb-8 min-h-screen">
      <Head>
        <title>UniTech Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/ogImg.jpg" />
        <meta name="google-site-verification" content="0sm1eSTPeRSerzZp2Kf_dIJnZAdjTXkhGF-JmCRap9M" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
            <div className='lg:sticky relative top-8'>
              <PostWidget categories={undefined} slug={undefined} />
              <Categories />
              <PageRate/>
            </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
    revalidate: 1,
  }
}