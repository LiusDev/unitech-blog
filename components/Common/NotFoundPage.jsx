import React from 'react'
import Head from 'next/head'
import { Button } from '..'

const NotFoundPage = () => {
    return (
        <div className='min-w-screen min-h-screen flex items-center justify-center'>
            <Head>
                <title>{ "Không tìm thấy trang :(" }</title>
            </Head>
            <div className='col-span-1 lg:col-span-8'>
                <div className='text-center mt-40'>
                    <h1 className='text-4xl font-bold mb-4'>{ "Không tìm thấy trang :(" }</h1>
                    <p className='text-xl mb-4'>Trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
                    <Button href="/">
                        Trang chủ
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage