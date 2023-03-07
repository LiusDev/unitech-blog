import { useState, useEffect } from 'react';
import Head from 'next/head'
import { FaAngleDown } from 'react-icons/fa';
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

    const [limitPost, setLimitPost] = useState(5);
    let showPosts = posts.slice(0, limitPost);

    const [showViewMore, setShowViewMore] = useState(false);

    const handleViewMore = () => {
        setLimitPost(prev => prev + 5);
        showPosts = posts.slice(0, limitPost);
    }

    useEffect(() => {
        if (posts.length > limitPost) {
            setShowViewMore(true);
        } else {
            setShowViewMore(false);
        }
    }, [limitPost])

    return (
        <div className="container mx-auto px-5 md:px-10 mb-8 mt-20 min-h-screen">
            <Head>
                <title>UniTech Blog</title>
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:image" content="/ogImg.png" />
                <meta name="google-site-verification" content="3efLReZ1VSvaHUpupLzLSTBLOUkxKVlLrOiHKiaA_wQ" />
            </Head>
            <FeaturedPosts />
            <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12">
                <div className='lg:col-span-8 col-span-1'>
                    { showPosts.map((post, index) => (
                        <PostCard key={ index } post={ post.node } />
                    )) }
                    <div className='text-center mb-8 lg:mb-0'>
                        {
                            showViewMore &&
                            <Button onClick={ () => handleViewMore() }>
                                <span className='flex flex-col items-center justify-center'>
                                    <span className='text-sm'>Xem thêm</span>
                                    <FaAngleDown className="w-4 h-4 group-hover:translate-y-1 transition-all" />
                                </span>
                            </Button>
                        }
                    </div>
                </div>
                <div className="lg:col-span-4 col-span-1">
                    <div className='lg:sticky relative lg:top-20'>
                        <PostWidget categories={ undefined } slug={ undefined } />
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