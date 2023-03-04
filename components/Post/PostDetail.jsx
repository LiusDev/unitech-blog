/* eslint-disable react/prop-types */
import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { FaCalendarAlt } from 'react-icons/fa'

const PostDetail = ({ post }) => {
    const renderPost = post.content.raw;

    return (
        <div className='bg supports-backdrop-blur:bg-white/95 dark:bg-zinc-900/75 border border-sky-900 rounded-lg lg:p-8 pb-12 mb-8 overflow-hidden'>
            <div className='relative overflow-hidden shadow-md mb-6'>
                <img
                    src={ post.featuredImage.url }
                    alt={ post.title }
                    className='object-center h-full w-full rounded-t-lg'
                />
            </div>
            <div className='px-4 lg:px-0'>
                <div className='flex items-center mb-8 w-full'>
                    <div className='flex items-center w-full lg:w-auto mr-8'>
                        <Image
                            src={ post.author.photo.url }
                            alt={ post.author.name }
                            height={ 30 }
                            width={ 30 }
                            className='align-middle rounded-full aspect-square object-cover'
                        />
                        <p className='inline align-middle ml-2 subtitle'>
                            { post.author.name }
                        </p>
                    </div>
                    <div className='font-medium flex items-center'>
                        <FaCalendarAlt className="w-5 h-5 mr-2 text-blue-400" />
                        <span className='subtitle'>
                            { moment(post.createdAt).format('DD/MM/YYYY') }
                        </span>
                    </div>
                </div>
                <div className='mb-4'>
                    { post.categories.map(category => (
                        <Link href={ `/category/${category.slug}` } key={ category.slug }>
                            <span className='inline-block mr-3 mb-3 category'>
                                { category.name }
                            </span>
                        </Link>
                    )) }
                </div>
                <h2>{ post.title }</h2>
                <RichText
                    content={ renderPost }
                    renderers={ {
                        h1: ({ children }) => <h1>{ children }</h1>,
                        h2: ({ children }) => <h2>{ children }</h2>,
                        h3: ({ children }) => <h3>{ children }</h3>,
                        h4: ({ children }) => <h4>{ children }</h4>,
                        h5: ({ children }) => <h5>{ children }</h5>,
                        p: ({ children }) => <p className='mb-4'>{ children }</p>,
                        a: ({ children, href, ...rest }) => {
                            if (href.match(/^https?:\/\/|^\/\//i)) {
                                return (
                                    <a
                                        href={ href }
                                        target='_blank'
                                        rel='noreferrer'
                                        className="text-blue-400 hover:underline"
                                        { ...rest }
                                    >
                                        { children }
                                    </a>
                                );
                            }

                            return (
                                <Link href={ href }>
                                    <a { ...rest }>{ children }</a>
                                </Link>
                            );
                        },
                        // image block
                        img: ({ src, alt, width, height }) => (
                            <Image
                                src={ src }
                                alt={ alt }
                                width={ width }
                                height={ height }
                                className="mb-4"
                            />
                        ),
                        // quote block
                        blockquote: ({ children }) => (
                            <blockquote className="border-l-4 border-sky-700 pl-4 mb-4">
                                { children }
                            </blockquote>
                        ),
                        // code
                        code: ({ children }) => (
                            <code className="bg-neutral-900 p-1 rounded">{ children }</code>
                        ),
                        // code block
                        code_block: ({ children }) => (
                            <pre className='mb-4 bg p-2 rounded overflow-hidden'>
                                { children }
                            </pre>
                        ),
                        // unordered list
                        ul: ({ children }) => (
                            <ul className="list-disc list-inside mb-4">{ children }</ul>
                        ),
                        // ordered list
                        ol: ({ children }) => (
                            <ol className="list-decimal list-inside mb-4">{ children }</ol>
                        ),
                    } }
                />
            </div>
        </div>
    )
}

export default PostDetail