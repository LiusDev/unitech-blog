import { useState, useEffect } from 'react';
import Head from 'next/head'
import { PostCard, Categories, PostWidget, Button } from '../components';
import { getPosts } from '../services'
import { FeaturedPosts } from '../sections';

export default function Home({ posts }) {

  const sortedPosts = (posts) => {
    return posts.sort((a, b) => {
      return new Date(b.node.createdAt) - new Date(a.node.createdAt);
    })
  }
  
  posts = sortedPosts(posts);

  // TODO : add view more button
  const [noOfPost, setNoOfPost] = useState(5);
  let showPosts = posts.slice(0, noOfPost);

  const [showViewMore, setShowViewMore] = useState(false);
  
  const handleViewMore = () => {
    setNoOfPost(noOfPost + 5);
    showPosts = posts.slice(0, noOfPost);
  }

  useEffect(() => {
    if (posts.length > noOfPost) {
      setShowViewMore(true);
    } else {
      setShowViewMore(false);
    }
  }, [noOfPost])
  
  return (
    <div className="container mx-auto px-5 md:px-10 mb-8 mt-20 min-h-screen">
      <Head>
        <title>UniTech Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/ogImg.png" />
        <meta name="google-site-verification" content="0sm1eSTPeRSerzZp2Kf_dIJnZAdjTXkhGF-JmCRap9M" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className='lg:col-span-8 col-span-1'>
          {showPosts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
          <div className='float-right'>
            {
              showViewMore &&
              <Button onClick={() => handleViewMore()}>
                  <span className='inline-block'>Xem thêm <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 inline-block"><path fill='#e2e8f0' d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></span>
              </Button>
            }
          </div>
        </div>
        <div className="lg:col-span-4 col-span-1">
            <div className='lg:sticky relative top-20'>
              <PostWidget categories={undefined} slug={undefined} />
              <Categories />
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