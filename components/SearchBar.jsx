import React from 'react'
import { useState, useEffect } from 'react'

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState(''); // state for search input value

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    return (
        // create a search bar UI using tailwind css
        <div>
            <input
                type="text"
                placeholder="Tìm kiếm..."
                value={ searchValue }
                onChange={ handleSearchInputChanges }
                className="border border-sky-900 w-full h-10 px-5 pr-10 text-sm placeholder-gray-400 bg rounded-full shadow focus:outline-none focus:shadow-outline"
            />
        </div>
    )
}

export default SearchBar