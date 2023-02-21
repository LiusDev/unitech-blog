/* eslint-disable react/prop-types */
import Link from 'next/link'
import React from 'react'

const Button = ({ href, onClick, children }) => {
    let BtnType = 'Link';
    const props = {};
    if (href) {
        BtnType = Link;
        props.href = href;
    } else {
        BtnType = 'button';
        props.onClick = onClick;
    }
    return (
        <BtnType
            { ...props }
            className='bg-blue-700 inline-block rounded-full font-bold text-lg text-center px-8 py-3 transition-all hover:bg-blue-800 cursor-pointer select-none group'
        >
            { children }
        </BtnType>
    )
}

export default Button