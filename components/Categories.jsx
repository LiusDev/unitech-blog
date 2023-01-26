import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, []);
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 pb-4'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Chủ đề
      </h3>
      {categories.map(category => (
        <Link href={`/category/${category.slug}`} key={category.slug}>
          <span className='cursor-pointer inline-block mr-3 py-1 px-3 mb-3 rounded-full bg-pink-600 text-white hover:drop-shadow-md hover:-translate-y-1 transition-all'>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories