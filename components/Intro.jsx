import React from 'react'
import { Categories, PostWidget } from '.'

const Intro = () => {
  return (
    <div className='bg rounded-lg lg:p-8 pb-12 mb-8 border border-sky-900'>
        <div className='px-4 lg:px-0'>
            <h3 className='mb-8 pb-4 font-semibold border-b border-sky-900'>Giới thiệu dự án</h3>
        </div>
        <div>
            Đây là sản phẩm của nhóm UniTym trong bộ môn SSG104 trường ĐH FPT
        </div>
    </div>
  )
}

export default Intro