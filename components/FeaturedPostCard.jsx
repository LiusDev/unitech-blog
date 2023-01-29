import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => (
    // TODO: Re-CSS featured post card
    <div className="relative h-72 overflow-hidden group hover:rounded-lg">
        <div
            className="absolute rounded-lg bg-center bg-no-repeat bg-cover blur-[2px] shadow-md inline-block w-full h-72 transition duration-400 group-hover:scale-110 group-hover:rounded-lg"
            style={ { backgroundImage: `url('${post.featuredImage.url}')` } }
        />
        <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
        <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full ">
            <p className="text-white mb-4 text-shadow font-semibold text-xs">{ moment(post.createdAt).format('DD/MM/YYYY') }</p>
            <p className="text-white mb-4 text-shadow font-semibold text-xl text-center self-end">{ post.title }</p>
            <div className="flex items-center absolute bottom-5 w-full justify-center">
                <Image
                    unoptimized
                    alt={ post.author.name }
                    height={ 30 }
                    width={ 30 }
                    className="align-middle drop-shadow-lg rounded-full"
                    src={ post.author.photo.url }
                />
                <p className="inline align-middle text-white text-shadow ml-2 font-medium">{ post.author.name }</p>
            </div>
        </div>
        <Link href={ `/post/${post.slug}` }><span className="cursor-pointer absolute w-full h-full" /></Link>
    </div>
);

export default FeaturedPostCard;