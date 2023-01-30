import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'
import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({ categories, slug }) => {

    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        if (slug) {
            getSimilarPosts(categories, slug)
                .then((result) => setRelatedPosts(result))
        } else {
            getRecentPosts()
                .then((result) => setRelatedPosts(result))
        }
    }, [categories, slug])

    if (relatedPosts.length === 0) return null;

    return (
        <div className='bg supports-backdrop-blur:bg-white/95 dark:bg-zinc-900/75 border border-sky-900 rounded-lg p-8 mb-8'>
            <h3 className='text-xl mb-8 font-semibold border-b border-sky-900 pb-4'>
                { slug ? 'Bài viết cùng chủ đề' : 'Bài viết gần đây' }
            </h3>
            { relatedPosts.map(post => {
                return (
                    <div key={ post.slug } className='flex items-center w-full mb-4'>
                        <div className='w-16 flex-none'>
                            <Link href={ `/post/${post.slug}` } key={ post.slug }>
                                <Image
                                    src={ post.featuredImage.url }
                                    alt={ post.title }
                                    height={ 60 }
                                    width={ 60 }
                                    className='align-middle rounded-md object-contain'
                                />
                            </Link>
                        </div>
                        <div className='flex-grow ml-4 '>
                            <Link href={ `/post/${post.slug}` } key={ post.slug }>
                                <p className='subtitle mb-1'>
                                    { moment(post.createdAt).format('DD/MM/YYYY') }
                                </p>
                                <span className='hover:text-blue-400 transition-all'>
                                    { post.title }
                                </span>
                            </Link>
                        </div>
                    </div>
                )
            }) }
        </div>
    )
}

export default PostWidget