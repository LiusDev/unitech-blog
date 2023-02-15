import { useRef, useState, useEffect } from 'react'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useTransition, animated } from '@react-spring/web';
import SearchBar from './SearchBar';
import { FaRegTimesCircle } from 'react-icons/fa';

const SearchButton = () => {
    const [searchActive, setSearchActive] = useState(false);
    const searchBtnRef = useRef(null);
    const searchRef = useRef(null);

    const handleSearch = () => {
        setSearchActive(searchActive => !searchActive);
    }

    const fadeInTransition = useTransition(searchActive, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    useEffect(() => {
        searchActive ? disableBodyScroll(document) : enableBodyScroll(document);

        const checkIfClickedOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target) && !searchBtnRef.current.contains(e.target)) {
                setSearchActive(false);
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside);

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [searchActive]);

    return (
        <>
            <button
                type='button'
                onClick={ handleSearch }
                ref={ searchBtnRef }
                className='lg:hidden w-10 h-10 flex items-center justify-center'
            >
                <FaSearch className='text-xl' />
            </button>
            { fadeInTransition((style, item) =>
                item &&
                <animated.div style={ style } className='fixed w-full h-screen top-full left-0 right-0 bottom-0 bg-zinc-900/90 flex justify-center'>
                    <div className='relative h-fit w-10/12 rounded-lg mt-20 p-5 flex justify-center bg supports-backdrop-blur:bg-white/95 dark:bg-zinc-900/75 border border-sky-900'>
                        <div className='w-full' ref={ searchRef }>
                            <SearchBar mobileSearch setSearchActive={ setSearchActive } />
                        </div>
                        <button
                            onClick={ () => setSearchActive(false) }
                            className='absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-sky-900 bg supports-backdrop-blur:bg-white/95 dark:bg-zinc-900 outline-none focus:ring-2 focus:ring-sky-900 flex items-center justify-center'
                        >
                            <span className='absolute w-6 h-[2px] bg-sky-600 rotate-45' />
                            <span className='absolute w-6 h-[2px] bg-sky-600 -rotate-45' />
                        </button>
                    </div>
                </animated.div>
            ) }
        </>
    )
}

export default SearchButton