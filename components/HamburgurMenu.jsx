import React from 'react'
import { useState } from 'react'

const HamburgurMenu = () => {
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
            {/* { menuActive && (
                <nav className=''>

                </nav>
            )} */}
        </>
    )
}

export default HamburgurMenu