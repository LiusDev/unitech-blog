import React, { useContext, useState, useEffect } from 'react'

import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, []);

  return (
    <header className='container mx-auto px-5 md:px-10 mb-4 text-center md:text-left'>
        <div className='border-b w-full inline-block border-blue-400 py-8'>
            <div className='md:float-left block'>
                <Link href='/'>
                    <span className="cursor-pointer font-bold text-4xl text-white drop-shadow-md hover:drop-shadow-lg transition-all">
                        UniTech Blog
                    </span>
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {/* {categories.map(category => (
                    <Link href={`/category/${category.slug}`} key={category.slug}>
                        <span className='cursor-pointer md:float-right mt-2 align-middle text-white ml-4 font-semibold'>
                            {category.name}
                        </span>
                    </Link>
                ))} */}
                <a href="https://forms.gle/inqEudBF7uQwJ1po6" target="_blank" data-replace="Đóng góp ý kiến" className='md:float-right mt-2 align-middle text-white ml-8 font-semibold drop-shadow-md navHover'><span>Đóng góp ý kiến</span></a>
                <Link href="/intro" data-replace="Giới thiệu" className='md:float-right mt-2 align-middle text-white ml-8 font-semibold drop-shadow-md navHover'><span>Giới thiệu</span></Link>
                <a href="https://www.facebook.com/unitym.fpt/" target="_blank" data-replace="Fanpage" className='md:float-right mt-2 align-middle text-white ml-8 font-semibold drop-shadow-md navHover'><span>Fanpage</span></a>
            </div>
        </div>
    </header>
  )
}

export default Header