import React, { useContext, useState, useEffect } from 'react'

import Link from 'next/link';

const Header = () => {

  return (
    // TODO search post by title
    <header className='fixed bg z-50 top-0 left-0 right-0 flex justify-center items-center mb-20px border-b border-sky-900'>
        <div className='container w-full inline-block px-5 lg:px-10 py-2 text-center md:text-left'>
            <div className='md:float-left block'>
                <Link href='/'>
                    <span className="cursor-pointer font-bold text-4xl drop-shadow-xl hover:text-blue-400 transition-all">
                        UniTech Blog
                    </span>
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                <Link href="https://forms.gle/inqEudBF7uQwJ1po6" target="_blank" className='md:float-right mt-2 align-middle ml-8 font-semibold navHover'>Đóng góp ý kiến</Link>
                <Link href="/intro" className='md:float-right mt-2 align-middle ml-8 font-semibold navHover'>Giới thiệu</Link>
                <Link href="/" className='md:float-right mt-2 align-middle ml-8 font-semibold navHover'>Trang chủ</Link>
            </div>
        </div>
    </header>
  )
}

export default Header