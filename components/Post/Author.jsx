/* eslint-disable react/prop-types */
import React from 'react'
import Image from 'next/image'

const Author = ({ author }) => {
    return (
        <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg border border-sky-900'>
            <div className='absolute left-1/2 -translate-x-1/2 -top-14'>
                <Image
                    src={ author.photo.url }
                    unoptimized
                    alt={ author.name }
                    height={ 100 }
                    width={ 100 }
                    className="align-middle rounded-full aspect-square object-cover"
                />
            </div>
            <h4 className='my-4 text-blue-400 font-bold'>{ author.name }</h4>
            <p className='text-lg'>{ author.bio }</p>
        </div>
    )
}

export default Author