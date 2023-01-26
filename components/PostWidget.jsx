import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({ categories, slug }) => {

  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if(slug) {
      getSimilarPosts(categories, slug)
        .then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts()
        .then((result) => setRelatedPosts(result))
    }
  }, [categories, slug])

  if(relatedPosts.length === 0) return null;
  
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {slug ? 'Bài viết cùng chủ đề' : 'Bài viết gần đây'}
      </h3>
      {relatedPosts.map(post => {
        {(post.node) ? post = post.node : post}
        return (
          <div key={post.slug} className='flex items-center w-full mb-4'>
              <div className='w-16 flex-none'>
                  <Link href={`/post/${post.slug}`} key={post.slug}>
                    <img
                      src={post.featuredImage.url}
                      alt={post.title}
                      height="60px"
                      width="60px"
                      className='align-middle rounded-full'
                    />
                  </Link>
              </div>
              <div className='flex-grow ml-4 '>
                <Link href={`/post/${post.slug}`} key={post.slug}>
                  <p className='text-gray-500 font-xs'>
                    {moment(post.createdAt).format('DD/MM/YYYY')}
                  </p>
                  <span className='text-md'>
                    {post.title}
                  </span>
                </Link>
              </div>
          </div>
        )
      })}
    </div>
  )
}

export default PostWidget