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
    <div className='bg border border-sky-900 rounded-lg p-8 mb-8 pb-4'>
      <h3 className='text-xl mb-8 font-semibold border-b border-sky-900 pb-4'>
        Chủ đề
      </h3>
      {categories.map(category => (
        <Link href={`/category/${category.slug}`} key={category.slug}>
          <span className='inline-block mr-3 mb-3 category'>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories