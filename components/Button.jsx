import Link from 'next/link'
import React from 'react'

const Button = ({ href, children }) => {
  return (
    <Link
        href={href}
        className='bg-blue-700 inline-block rounded-full font-bold text-lg px-8 py-3 transition-all hover:bg-blue-800'
    >
        {children}
    </Link>
  )
}

export default Button