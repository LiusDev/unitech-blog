import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Categories, Loader, PageRate, Button } from '../../components';

const CategoryPost = ({ posts }) => {

  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  //not found page
  if (posts.length === 0) {
    return (
      <div className='min-w-screen min-h-screen flex items-center justify-center'>
        <Head>
            <title>{"Không tìm thấy trang :("}</title>
        </Head>
        <div className='col-span-1 lg:col-span-8'>
            <div className='text-center mt-40'>
                <h1 className='text-4xl font-bold mb-4'>{"Không tìm thấy trang :("}</h1>
                <p className='text-xl mb-4'>Trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
                <Button href="/">
                    Trang chủ
                </Button>
            </div>
        </div>
      </div>
    )
  }

  //get curent category name
  const [categoryName, setCategoryName] = useState('');
  useEffect(() => {
    const getCategoryName = async () => {
      const categories = await getCategories();
      const currentCategory = categories.filter(
        (category) => category.slug === router.query.slug
      );
      setCategoryName(currentCategory[0].name);
    };
    getCategoryName();
  }, [router.query.slug]);

  return (
    <div className="container mx-auto px-10 mb-8 min-h-screen">
      <Head>
        <title>{`Chủ đề: ${categoryName}`}</title>
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8 mt-20">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-20">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}