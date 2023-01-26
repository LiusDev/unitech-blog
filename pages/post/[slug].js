import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { getPosts, getPostDetails } from '../../services'

import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, Loader, PageRate } from '../../components'

import Link from 'next/link'

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  //not found page
  if (!post) {
    return (
        <div className='container mx-auto px-5 md:px-10 mb-8 min-h-screen'>
            <Head>
                <title>Không tìm thấy trang :{`(`}</title>
            </Head>
            <div className='col-span-1 lg:col-span-8'>
                <div className='text-center mt-40'>
                    <h1 className='text-4xl font-bold mb-4 text-white'>Không tìm thấy trang :{`(`}</h1>
                    <p className='text-xl mb-4 text-white'>Trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
                    <Link href="/">
                        <span className='transition duration-400 transform hover:-translate-y-1 inline-block bg-pink-600 font-medium rounded-full text-white px-8 py-3 cursor-pointer mb-4'>
                        Trang chủ
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
  }

  return (
    <div className='container mx-auto px-5 md:px-10 mb-8 min-h-screen'>
        <Head>
            <title>{post.title}</title>
        </Head>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <div className='col-span-1 lg:col-span-8'>
                {/* <Link href="/">
                    <span className='transition duration-400 transform hover:-translate-y-1 inline-block bg-pink-600 font-medium rounded-full text-white px-8 py-3 cursor-pointer mb-4'>
                    Trang chủ
                    </span>
                </Link> */}
                <PostDetail post={post} />
                <Author author={post.author} />
                <CommentsForm slug={post.slug} />
                <Comments slug={post.slug} />
            </div>
            <div className='col-span-1 lg:col-span-4'>
                <div className='relative lg:sticky top-20'>
                    <PostWidget slug={post.slug} categories={post.categories.map(category => category.slug)}/>
                    <Categories />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug)
  
    return {
      props: { post: data }
    }
}

export async function getStaticPaths() {
    const posts = await getPosts()
  
    return {
        paths: posts.map(({ node: { slug }}) => ({ params : { slug }})),
        fallback: true
    }
}