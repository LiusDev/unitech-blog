import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-white px-4 py-8 md:px-12 lg:px-16 relative bottom-0 left-0 right-0'>
        <div className='flex flex-col md:flex-row md:space-x-16 justify-center md:items-center items-start'>
            <a href="https://www.facebook.com/unitym.fpt/" target="_blank" className='mb-3 md:mb-0'>
                <img src="https://imgur.com/fVrZMJb.png" alt="logo" className='aspect-square rounded-full object-cover h-32'/>
            </a>
            <div className='flex flex-col space-y-4 mb-3 md:mb-0'>
                <div className='flex items-center space-x-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path fill="#db2777" d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z"/></svg>
                    <p className='max-w-xs'>Đại học FPT, Khu Công nghệ cao Hòa Lạc, KM 29 Đại lộ Thăng Long, Hà Nội, Việt Nam.</p>
                </div>
                <div className='flex items-center space-x-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path fill="#db2777" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                    <a href='mailto:contact@unitym.tech' className='max-w-xs'>contact@unitym.tech</a>
                </div>
            </div>
            <div className='flex flex-col space-y-3'>
                <div className='flex items-center space-x-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path fill="#db2777" d="M224 0c70.7 0 128 57.3 128 128s-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 39.5-161.2c77.2 12 136.3 78.8 136.3 159.4c0 17-13.8 30.7-30.7 30.7H265.1 182.9 30.7C13.8 512 0 498.2 0 481.3c0-80.6 59.1-147.4 136.3-159.4l39.5 161.2 33.4-123.9z"/></svg>
                    <a href="https://www.facebook.com/x.quy.203/" target="_blank">
                        <div>
                            <p>Trưởng nhóm dự án:</p>
                            <p className='text-pink-600 font-semibold'>Đào Xuân Quý</p>
                        </div>
                    </a>
                </div>
                <div className='flex items-center space-x-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path fill="#db2777" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                    <a href="mailto:quydx@unitym.tech">quydx@unitym.tech</a>
                </div>
                <div className='flex items-center space-x-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path fill="#db2777" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                    <a href="tel:09784077765">0978 407 765</a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer