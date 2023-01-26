import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'

const PostCard = ({ post }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
        <Link href={`/post/${post.slug}`} key={post.slug}>
          <div className='relative overflow-hidden pb-80 mb-6 cursor-pointer shadow-lg rounded-t-lg lg:rounded-lg'>
            <img
              src={post.featuredImage.url}
              alt={post.title}
              className='object-middle absolute h-80 w-full object-cover hover:scale-105 transition duration-400'
            />
          </div>
        </Link>
        
        <Link href={`/post/${post.slug}`}>
          <h1 className='transition duration-400 text-center mb-4 px-2 cursor-pointer hover:text-pink-600 text-3xl font-semibold'>
            {post.title}
          </h1>
        </Link>
        <div className='text-center mb-4 px-2'>
          {post.categories.map(category => (
            <Link href={`/category/${category.slug}`} key={category.slug}>
              <span className='cursor-pointer inline-block mr-3 py-1 px-3 mb-3 rounded-full bg-pink-600 text-white text-sm hover:drop-shadow-md hover:-translate-y-1 transition-all'>
                {category.name}
              </span>
            </Link>
          ))}
        </div>
        <div className='block lg:flex text-center items-center justify-center mb-4 w-full'>
          <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
            <Image
              unoptimized
              src={post.author.photo.url}
              alt={post.author.name}
              height={30}
              width={30}
              className='align-middle rounded-full'
            />
            <p className='inline align-middle text-gray-700 ml-2 text-lg'>
              {post.author.name}
            </p>
          </div>
          <div className='font-medium text-gray-700'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>
              {moment(post.createdAt).format('DD/MM/YYYY')}
            </span>
          </div>
        </div>
        <p className='text-center text-lg text-gray-700 font-normal px-4 lg:p-5 mb-4'>
          {post.excerpt}
        </p>
        <div className='text-center'>
          <Link href={`/post/${post.slug}`}>
            <span className='transition duration-400 transform-all hover:-translate-y-1 hover:drop-shadow-md inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'>
              Xem thêm
            </span>
          </Link>
        </div>
    </div>
  )
}

export default PostCard