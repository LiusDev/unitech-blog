import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getPosts } from '../services';

const SearchBar = () => {

    const [searchValue, setSearchValue] = useState('');
    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts()
            .then((result) => setPosts(result))
    }, [])

    const [searchPost, setSearchPost] = useState([]);
    useEffect(() => {
        const results = posts.filter(post => {
            post = post.node;
            return post.title.toLowerCase().includes(searchValue.toLowerCase());
        });
        setSearchPost(results);
    }, [searchValue]);

    const searchRef = useRef(null);
    const [searchFocus, setSearchFocus] = useState(false);
    useEffect(() => {

        const checkIfClickedOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setSearchFocus(false);
            } else {
                setSearchFocus(true);
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside);

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, []);

    const handlePostSelect = () => {
        setSearchValue('');
    }

    return (
        <div className='relative' ref={ searchRef }>
            <input
                type="text"
                placeholder="Tìm kiếm..."
                value={ searchValue }
                onChange={ handleSearchInputChanges }
                className="border border-sky-900 w-full h-10 px-5 pr-10 text-sm placeholder-gray-400 bg rounded-full outline-none focus:ring-2 focus:ring-sky-900 transition-all"
            />
            {
                searchValue.length > 1 && searchFocus &&
                <div className='absolute left-0 top-12 w-full bg-neutral-800 opacity-95 rounded-md px-5 py-2'>
                    {
                        searchPost.length !== 0 &&
                        searchPost.map(post => {
                            post = post.node;
                            return (
                                <div key={ post.slug } className='flex items-center w-full mb-4'>
                                    <Link
                                        href={ `/post/${post.slug}` }
                                        key={ post.slug }
                                        className='flex items-center w-full'
                                        onClick={ handlePostSelect }>

                                        <Image
                                            src={ post.featuredImage.url }
                                            alt={ post.title }
                                            height={ 60 }
                                            width={ 60 }
                                            className='align-middle rounded-md object-contain'
                                        />
                                        <span className='text-sm ml-4 hover:text-blue-400 transition-all'>{ post.title }</span>
                                    </Link>
                                </div>
                            )
                        }) ||
                        <span className='text-sm'>{ `Không tìm thấy kết quả nào cho '${searchValue}'` }</span>
                    }
                </div>
            }
        </div>
    )
}

export default SearchBar