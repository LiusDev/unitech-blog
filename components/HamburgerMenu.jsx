import React from 'react'
import { useState } from 'react'
import { FaHome, FaInfoCircle, FaComment } from 'react-icons/fa'
import Link from 'next/link'

const HamburgerMenu = ({ navList }) => {
    const [menuActive, setMenuActive] = useState(false);

    const handleMenu = () => {
        setMenuActive(!menuActive);
    }
    return (
        <>
            <button
                type='button'
                onClick={ handleMenu }
                className={ `lg:hidden w-10 h-10 flex items-center justify-center hamburger-menu ${menuActive ? 'active' : ''}` }
            >
                <span></span>
            </button>
            { menuActive && (
                <div className='fixed w-full h-screen top-full left-0 right-0 bottom-0 bg-zinc-900/90'>
                    <nav className='fixed top-full left-0 w-72 h-screen bg-neutral-800 border-r border-t border-sky-900 pl-5 py-4 overflow-hidden'>
                        { navList.map(item => {
                            return (
                                <Link key={ item.href } href={ item.href } target={ item.target } className='flex items-center font-semibold h-8 my-4'>
                                    { item.name }
                                </Link>
                            )
                        }) }
                    </nav>
                </div>
            ) }
        </>
    )
}

export default HamburgerMenu