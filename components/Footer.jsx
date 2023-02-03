import React from 'react'
import { FaMapMarkedAlt, FaEnvelope, FaUserTie, FaPhoneAlt } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='bg supports-backdrop-blur:bg-white/95 dark:bg-zinc-900/75 border-t border-sky-900 px-4 py-8 md:px-12 lg:px-16 relative bottom-0 left-0 right-0'>
            <div className='flex flex-col md:flex-row md:space-x-16 justify-center md:items-center items-start'>
                <a href="https://www.facebook.com/SSG.UniTech.Blog" target="_blank" className='mb-3 md:mb-0'>
                    <img src="https://imgur.com/fVrZMJb.png" alt="logo" className='aspect-square rounded-full object-cover h-32' />
                </a>
                <div className='flex flex-col space-y-4 mb-3 md:mb-0'>
                    <div className='flex items-center space-x-3'>
                        <FaMapMarkedAlt className='w-6 h-6 text-blue-400' />
                        <a href="https://goo.gl/maps/AYC7XBBsCnfwXKQj9" target="_blank" className='max-w-xs hover:text-blue-400 transition-all'>Đại học FPT, Khu Công nghệ cao Hòa Lạc, KM 29 Đại lộ Thăng Long, Hà Nội, Việt Nam.</a>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <FaEnvelope className='w-6 h-6 text-blue-400' />
                        <a href='mailto:contact@unitym.tech' className='max-w-xs hover:text-blue-400 transition-all'>contact@unitym.tech</a>
                    </div>
                </div>
                <div className='flex flex-col space-y-3 mb-3 md:mb-0'>
                    <div className='flex items-center space-x-3'>
                        <FaUserTie className='w-6 h-6 text-blue-400' />
                        <a href="https://www.facebook.com/x.quy.203/" target="_blank" className='hover:text-blue-400 transition-all'>
                            <div>
                                <p>Trưởng nhóm dự án:</p>
                                <p className='font-semibold'>Đào Xuân Quý</p>
                            </div>
                        </a>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <FaEnvelope className='w-6 h-6 text-blue-400' />
                        <a href="mailto:quydx@unitym.tech" className='hover:text-blue-400 transition-all'>quydx@unitym.tech</a>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <FaPhoneAlt className='w-6 h-6 text-blue-400' />
                        <a href="tel:09784077765" className='hover:text-blue-400 transition-all'>0978 407 765</a>
                    </div>
                </div>
                <div className='flex flex-col space-y-4 mb-3 md:mb-0'>
                    <div className='flex items-center space-x-3'>
                        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSSG.UniTech.Blog&tabs&width=280&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="280" height="130" style={ { border: "none", overflow: "hidden" } } scrolling="no" frameBorder="0" allowFullScreen={ true } allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer