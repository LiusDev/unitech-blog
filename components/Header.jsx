import Link from 'next/link';
import SearchBar from './SearchBar';

const Header = () => {

    return (
        <header className='fixed bg supports-backdrop-blur:bg-white/95 dark:bg-zinc-900/75 z-50 top-0 left-0 right-0 flex justify-center items-center mb-20px border-b border-sky-900'>
            <div className='container flex items-center justify-between px-5 lg:px-10 py-2'>
                <div className='md:float-left block'>
                    <Link href='/' className='cursor-pointer'>
                        <img src="/logo.png" alt="logo" className='h-10' />
                    </Link>
                </div>
                <div className='hidden xl:inline-block xl:w-1/3 xl:max-w-lg'>
                    <SearchBar />
                </div>
                <div className='hidden md:flex md:items-center'>
                    <Link href="/" className='ml-8 font-semibold navHover'>Trang chủ</Link>
                    <Link href="/intro" className='ml-8 font-semibold navHover'>Giới thiệu</Link>
                    <Link href="https://forms.gle/inqEudBF7uQwJ1po6" target="_blank" className='ml-8 font-semibold navHover'>Đóng góp ý kiến</Link>
                </div>
            </div>
        </header>
    )
}

export default Header