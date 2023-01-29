import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'

const PostCard = ({ post }) => {
    return (
        <div className='bg border border-sky-900 rounded-lg p-0 lg:p-8 pb-12 mb-8'>

            <Link href={ `/post/${post.slug}` } key={ post.slug }>
                <div className='relative overflow-hidden pb-80 mb-6 cursor-pointer shadow-lg rounded-t-lg lg:rounded-lg'>
                    <img
                        src={ post.featuredImage.url }
                        alt={ post.title }
                        className='object-middle absolute h-80 w-full object-cover hover:scale-105 transition duration-400'
                    />
                </div>
            </Link>
            {/* TODO: Align author and date */ }
            <div className='block lg:flex text-center items-center justify-center mb-4 w-full'>
                <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
                    <Image
                        unoptimized
                        src={ post.author.photo.url }
                        alt={ post.author.name }
                        height={ 30 }
                        width={ 30 }
                        className='align-middle rounded-full'
                    />
                    <p className='inline align-middle ml-2 subtitle'>
                        { post.author.name }
                    </p>
                </div>
                <div className='font-medium'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2 inline-block"><path fill="#60a5fa" d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" /></svg>
                    <span className='subtitle'>
                        { moment(post.createdAt).format('DD/MM/YYYY') }
                    </span>
                </div>
            </div>

            <div className='text-center mb-3 px-2'>
                { post.categories.map(category => (
                    <Link href={ `/category/${category.slug}` } key={ category.slug }>
                        <span className='inline-block mx-2 mb-2 category'>
                            { category.name }
                        </span>
                    </Link>
                )) }
            </div>

            <Link href={ `/post/${post.slug}` }>
                <h3 className='transition duration-400 text-center px-2 mb-3 cursor-pointer hover:text-blue-400 font-semibold'>
                    { post.title }
                </h3>
            </Link>


            <p className='text-center px-4 lg:p-5 mb-4'>
                { post.excerpt }
            </p>

            <div className='text-center'>
                <Button href={ `/post/${post.slug}` }>
                    Đọc tiếp
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-1 inline-block"><path fill='#e2e8f0' d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                    </span>
                </Button>
            </div>
        </div>
    )
}

export default PostCard