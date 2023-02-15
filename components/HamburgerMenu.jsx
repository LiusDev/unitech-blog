import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useTransition, animated } from '@react-spring/web';

const HamburgerMenu = ({ navList }) => {
    const [menuActive, setMenuActive] = useState(false);

    const handleMenu = () => {
        setMenuActive(menuActive => !menuActive);
    }

    const menuRef = useRef(null);
    const menuBtnRef = useRef(null);
    useEffect(() => {
        // disable body scroll when menu is active
        menuActive ? disableBodyScroll(document) : enableBodyScroll(document);

        //check if click outside without exit btn
        const checkIfClickedOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target) && !menuBtnRef.current.contains(e.target)) {
                setMenuActive(false);
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside);

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [menuActive]);

    const overlayTransition = useTransition(menuActive, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    const menuTransition = useTransition(menuActive, {
        from: { transform: 'translateX(-100%)' },
        enter: { transform: 'translateX(0%)' },
        leave: { transform: 'translateX(-100%)' },
    });

    return (
        <>
            <button
                type='button'
                onClick={ handleMenu }
                ref={ menuBtnRef }
                className={ `lg:hidden w-10 h-10 flex items-center justify-center hamburger-menu ${menuActive ? 'active' : ''}` }
            >
                <span></span>
            </button>
            { overlayTransition((style, item) =>
                item && <animated.div style={ style } className='fixed w-full h-screen top-full left-0 right-0 bottom-0 bg-zinc-900/90' />
            ) }
            { menuTransition((style, item) =>
                item && (
                    <animated.nav
                        ref={ menuRef }
                        style={ style }
                        className='fixed top-full left-0 w-72 h-screen bg-neutral-800 border-r border-t border-sky-900 pl-5 py-4 overflow-hidden'
                    >
                        { navList.map(item => {
                            return (
                                <Link
                                    key={ item.id }
                                    href={ item.href }
                                    target={ item.target }
                                    onClick={ () => setMenuActive(false) }
                                    className='flex items-center font-semibold h-8 my-4 hover:text-blue-400 transition-all'
                                >
                                    { item.icon } { item.name }
                                </Link>
                            )
                        }) }
                    </animated.nav>
                )
            ) }
        </>
    )
}

export default HamburgerMenu