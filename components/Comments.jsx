import React, { useState, useEffect } from 'react'
import moment from 'moment'
import parse from 'html-react-parser'
import { getComments } from '../services';

const Comments = ({ slug }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments(slug)
            .then((res) => setComments(res))
    }, []);

    return (
        <>
            { comments.length > 0 && (
                <div className='bg supports-backdrop-blur:bg-white/95 dark:bg-zinc-900/75 border border-sky-900 rounded-lg p-8 pb-12 mb-8'>
                    <h3 className='text-xl mb-8 font-semibold border-b border-sky-900 pb-4'>
                        { comments.length }
                        { ' ' }
                        Bình luận
                    </h3>
                    { comments.map((comment) => (
                        <div key={ comment.createdAt } className='border-b border-sky-900 mb-4 pb-4'>
                            <p className='mb-4'>
                                <span className='font-semibold'>{ comment.name }</span>
                                { ' ' }
                                đã bình luận
                                { ' (' }
                                { moment(comment.createdAt).format('DD/MM/YYYY') }
                                { ')' }
                            </p>
                            <p className='whitespace-pre-line w-full'>
                                { parse(comment.comment) }
                            </p>
                        </div>
                    )) }
                </div>
            ) }
        </>
    )
}

export default Comments