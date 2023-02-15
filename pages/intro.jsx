import React from 'react'
import { Categories, Intro, PostWidget } from '../components'
import Head from 'next/head'

const intro = () => {
    return (
        <div className='container mx-auto px-5 md:px-10 mb-8 mt-20 min-h-screen'>
            <Head>
                <title>Giới thiệu dự án UniTech Blog</title>
            </Head>
            <div className='grid grid-cols-1 lg:grid-cols-12 lg:gap-12'>
                <div className='col-span-1 lg:col-span-8'>
                    <Intro />
                </div>
                <div className='col-span-1 lg:col-span-4'>
                    <div className='relative lg:sticky lg:top-20'>
                        <PostWidget categories={ undefined } slug={ undefined } />
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default intro