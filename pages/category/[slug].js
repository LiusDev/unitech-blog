import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Categories, Loader, PageRate } from '../../components';

const CategoryPost = ({ posts }) => {

  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  //not found page
  if (posts.length === 0) {
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
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
            <PageRate/>
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