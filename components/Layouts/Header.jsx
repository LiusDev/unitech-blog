/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaHome, FaInfoCircle, FaComment, FaExternalLinkAlt } from 'react-icons/fa'
import SearchBar from './SearchBar';
import HamburgerMenu from './HamburgerMenu';
import SearchButton from './SearchButton';

const navList = [
    {
        id: 1,
        name: 'Trang chủ',
        href: '/',
        target: '_self',
        icon: <FaHome className='text-xl mr-2' />,
        suffix: ''
    },
    {
        id: 2,
        name: 'Giới thiệu',
        href: '/intro',
        target: '_self',
        icon: <FaInfoCircle className='text-xl mr-2' />,
        suffix: ''
    },
    {
        id: 3,
        name: 'Đóng góp ý kiến',
        href: 'https://forms.gle/inqEudBF7uQwJ1po6',
        target: '_blank',
        icon: <FaComment className='text-xl mr-2' />,
        suffix: <FaExternalLinkAlt className='inline-block ml-2' />
    },
]

const Header = () => {
    // Get current route
    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <header className='fixed bg supports-backdrop-blur:bg-white/95 dark:bg-zinc-900/75 z-50 top-0 left-0 right-0 flex justify-center items-center mb-20px border-b border-sky-900'>
            <div className='w-full lg:container flex items-center justify-between px-5 lg:px-10 py-2'>
                <HamburgerMenu navList={ navList } />
                <Link href='/' className='cursor-pointer' title='Trang chủ'>
                    <img src="/logo.png" alt="logo" className='h-8 lg:h-10' />
                </Link>
                <div className='hidden lg:inline-block xl:w-1/3 2xl:max-w-lg'>
                    <SearchBar />
                </div>
                <nav className='hidden lg:flex items-center'>
                    { navList.map(item => (
                        <Link
                            key={ item.id }
                            href={ item.href }
                            target={ item.target }
                            rel='noopener'
                            className={ `ml-8 font-semibold navHover flex items-center ${currentRoute === item.href ? 'active' : ''}` }
                            title={ item.name }
                        >
                            { item.name } { item.suffix }
                        </Link>
                    )) }
                </nav>
                <SearchButton />
            </div>
        </header>
    )
}

export default Header