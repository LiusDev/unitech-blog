import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchButton = () => {
    // TODO: Add search functionality
    return (
        <>
            <button
                type='button'
                className='lg:hidden w-10 h-10 flex items-center justify-center'>
                <FaSearch className='text-xl' />
            </button>
        </>
    )
}

export default SearchButton