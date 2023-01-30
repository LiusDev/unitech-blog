import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image';
import { RichText } from '@graphcms/rich-text-react-renderer';

const PostDetail = ({ post }) => {
    const renderPost = post.content.raw;

    return (
        <div className='bg supports-backdrop-blur:bg-white/95 dark:bg-zinc-900/75 border border-sky-900 rounded-lg lg:p-8 pb-12 mt-20 mb-8 overflow-hidden'>
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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2 inline-block"><path fill="#60a5fa" d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" /></svg>
                        <span className='subtitle'>
                            { moment(post.createdAt).format('DD/MM/YYYY') }
                        </span>
                    </div>
                </div>
                <div className='mb-4'>
                    { post.categories.map((category, index) => (
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
                        p: ({ children }) => <p className='mb-4'>{ children }</p>,
                        a: ({ children, openInNewTab, href, rel, ...rest }) => {
                            if (href.match(/^https?:\/\/|^\/\//i)) {
                                return (
                                    <a
                                        href={ href }
                                        target={ openInNewTab ? '_blank' : '_self' }
                                        rel={ rel || 'noopener noreferrer' }
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