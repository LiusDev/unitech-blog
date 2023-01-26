import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import { RichText } from '@graphcms/rich-text-react-renderer';

const PostDetail = ({ post }) => {
  const renderPost = post.content.raw;
  
  return (
    <div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8 overflow-hidden'>
      <div className='relative overflow-hidden shadow-md mb-6'>
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className='object-center h-full w-full rounded-t-lg'
        />
      </div>
      <div className='px-4 lg:px-0'>
        <div className='flex items-center mb-8 w-full'>
          <div className='flex items-center w-full lg:w-auto mr-8'>
            <img
              src={post.author.photo.url}
              alt={post.author.name}
              height="30px"
              width="30px"
              className='align-middle rounded-full aspect-square object-cover'
            />
            <p className='inline align-middle text-gray-700 ml-2 text-lg'>
              {post.author.name}
            </p>
          </div>
          <div className='font-medium text-gray-700 flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            <span>
              {moment(post.createdAt).format('DD/MM/YYYY')}
            </span>
          </div>
        </div>
        <div className='mb-4'>
          {post.categories.map((category, index) => (
            <Link href={`/category/${category.slug}`} key={category.slug}>
              <span className='cursor-pointer inline-block mr-3 py-1 px-3 mb-3 rounded-full bg-pink-600 text-white hover:drop-shadow-md hover:-translate-y-1 transition-all'>
                {category.name}
              </span>
            </Link>
          ))}
        </div>
        <h1 className='mb-8 text-3xl font-semibold'>{post.title}</h1>
        <RichText
          content={renderPost}
          renderers={{
            h1: ({ children }) => <h1 className='mb-8 text-3xl font-semibold'>{children}</h1>,
            h2: ({ children }) => <h2 className='mb-4 text-2xl font-semibold'>{children}</h2>,
            h3: ({ children }) => <h3 className='mb-4 text-xl font-semibold'>{children}</h3>,
            p: ({ children }) => <p className='mb-4'>{children}</p>,
            a: ({ children, openInNewTab, href, rel, ...rest }) => {
              if (href.match(/^https?:\/\/|^\/\//i)) {
                return (
                  <a
                    href={href}
                    target={openInNewTab ? '_blank' : '_self'}
                    rel={rel || 'noopener noreferrer'}
                    className="text-pink-600 hover:underline"
                    {...rest}
                  >
                    {children}
                  </a>
                );  
              }
    
              return (
                <Link href={href}>
                  <a {...rest}>{children}</a>
                </Link>
              );
            },
            // image block
            img: ({ src, alt, width, height }) => (
              <img
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="mb-4"
              />
            ),
            // quote block
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-pink-600 pl-4 mb-4">
                {children}
              </blockquote>
            ),
            // code
            code: ({ children }) => (
              <code className="bg-gray-100 p-2 rounded">{children}</code>
            ),
            // code block
            code_block: ({ children }) => (
              <pre className='mb-4 bg-gray-100 p-2 rounded'>
                {children}
              </pre>
            ),
            // unordered list
            ul: ({ children }) => (
              <ul className="list-disc list-inside mb-4">{children}</ul>
            ),
            // ordered list
            ol: ({ children }) => (
              <ol className="list-decimal list-inside mb-4">{children}</ol>
            ),
          }}
        />
      </div>
    </div>
  )
}

export default PostDetail