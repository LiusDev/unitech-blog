import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => {
    return (
        <div className='h-72 bg supports-backdrop-blur:bg-white/95 dark:bg-zinc-900/75 border border-sky-900 relative rounded-lg overflow-hidden' >
            <Link href={ `/post/${post.slug}` }>
                <div className='h-full w-full relative'>
                    <div
                        style={ { backgroundImage: `url('${post.featuredImage.url}')` } }
                        className='h-2/5 w-full bg-cover bg-center'
                    />
                    <div className='p-4 h-3/5 flex flex-col justify-between'>
                        <p className='font-semibold hover:text-blue-400 transition duration-400'>{ post.title }</p>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center justify-start'>
                                <Image
                                    unoptimized
                                    alt={ post.author.name }
                                    height={ 30 }
                                    width={ 30 }
                                    className='rounded-full mr-2 inline-block'
                                    src={ post.author.photo.url }
                                />
                                <span className='subtitle'>{ post.author.name }</span>
                            </div>
                            <span className="subtitle justify-self-end">{ moment(post.createdAt).format('DD/MM/YYYY') }</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default FeaturedPostCard;