import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { useTransition, animated } from '@react-spring/web';

const BackToTopBtn = () => {
    const [visible, setVisible] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => {
            window.removeEventListener('scroll', toggleVisible);
        }
    }, []);

    const fadeInOut = useTransition(visible, {
        config: { mass: 1, tension: 500, friction: 18 },
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    return (
        <>
            { fadeInOut((style, item) =>
                item && (
                    <animated.button
                        onClick={ scrollToTop }
                        className='fixed z-50 bottom-6 left-6 w-[60px] h-[60px] flex items-center justify-center rounded-full font-bold text-2xl bg-blue-700 drop-shadow-lg transition-all hover:bg-blue-800 cursor-pointer select-none group'
                        style={ style }
                    >
                        <FaArrowUp className=' group-hover:-translate-y-[2px] transition-all' />
                    </animated.button>
                )
            ) }
        </>
    )
}

export default BackToTopBtn