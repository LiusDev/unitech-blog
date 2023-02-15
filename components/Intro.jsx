import React from 'react'
import { Categories, PostWidget } from '.'

const Intro = () => {
    return (
        <div className='bg supports-backdrop-blur:bg-white/95 dark:bg-zinc-900/75 rounded-lg p-8 mb-8 border border-sky-900'>
            <h3 className='mb-8 pb-4 font-semibold border-b border-sky-900'>Giới thiệu dự án</h3>
            <div>
                Đây là sản phẩm của nhóm UniTym trong bộ môn SSG104 trường ĐH FPT
            </div>
        </div>
    )
}

export default Intro