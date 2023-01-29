import React from 'react'

const SearchBar = () => {
    // Todo: Search bar
    return (
        // create a search bar UI using tailwind css
        <div>
            <input type="text" placeholder="Search" className="border border-sky-900 w-full h-10 px-5 pr-10 text-sm text-gray-700 placeholder-gray-400 bg rounded-full shadow focus:outline-none focus:shadow-outline" />
        </div>
    )
}

export default SearchBar