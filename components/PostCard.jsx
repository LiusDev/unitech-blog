import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa'

const PostCard = ({ post }) => {
    return (
        <div className='bg supports-backdrop-blur:bg-white/95 dark:bg-zinc-900/75 border border-sky-900 rounded-lg p-0 lg:p-8 pb-12 mb-8'>

            <Link href={ `/post/${post.slug}` } key={ post.slug }>
                <div className='relative overflow-hidden pb-48 lg:pb-80 mb-6 cursor-pointer shadow-lg rounded-t-lg lg:rounded-lg'>
                    <img
                        src={ post.featuredImage.url }
                        alt={ post.title }
                        className='object-middle absolute h-48 lg:h-80 w-full object-cover hover:scale-105 transition duration-400'
                    />
                </div>
            </Link>

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
                <div className='flex items-center justify-center'>
                    <FaCalendarAlt className="w-5 h-5 mr-2 text-blue-400" />
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
                    Đọc tiếp <FaArrowRight className="w-4 h-4 inline-block group-hover:translate-x-1 transition-all" />
                </Button>
            </div>
        </div>
    )
}

export default PostCard