import React, { useContext, useState, useEffect } from 'react'

import Link from 'next/link';
import SearchBar from './SearchBar';

const Header = () => {

    return (
        <header className='fixed bg z-50 top-0 left-0 right-0 flex justify-center items-center mb-20px border-b border-sky-900'>
            <div className='container flex items-center justify-between px-5 lg:px-10 py-2'>
                <div className='md:float-left block'>
                    <Link href='/'>
                        <span className="cursor-pointer font-bold text-4xl drop-shadow-xl hover:text-blue-400 transition-all">
                            UniTech Blog
                        </span>
                    </Link>
                </div>
                <div className='hidden md:inline-block'>
                    {/* <SearchBar /> */ }
                </div>
                <div className='hidden md:flex md:items-center'>
                    <Link href="/" className='ml-8 font-semibold navHover'>Trang chủ</Link>
                    <Link href="/intro" className='ml-8 font-semibold navHover'>Giới thiệu</Link>
                    <Link href="https://forms.gle/inqEudBF7uQwJ1po6" target="_blank" className='ml-8 font-semibold navHover'>Đóng góp ý kiến</Link>
                </div>
            </div>
        </header>
    )
}

export default Header