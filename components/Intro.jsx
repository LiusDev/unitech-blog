import React from 'react'
import { Categories, PostWidget } from '.'

const Intro = () => {
  return (
    <div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8'>
        <div className='px-4 lg:px-0'>
            <h1 className='mb-8 pb-4 border-b text-3xl font-semibold'>Giới thiệu dự án</h1>
        </div>
        <div>
            Đây là sản phẩm của nhóm UniTym trong bộ môn SSG104 trường ĐH FPT
        </div>
    </div>
  )
}

export default Intro