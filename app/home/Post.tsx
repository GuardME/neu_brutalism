import React from 'react'

type Props = {}

const heroSection = (props: Props) => {

    return (
        <div>
            <h2 className='text-4xl text-center mt-6'>
                Trending
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <div className='bg-pink-500 p-4 border-2 line-clamp-7 shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]'>
                    <h3>Title</h3>
                    <p>Content</p>
                </div>
                <div className='bg-blue-500 p-4 border-2 line-clamp-7 shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]'>
                    <h3>Title</h3>
                    <p>Content</p>
                </div>
                <div className='bg-yellow-500 p-4 border-2 line-clamp-7 shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]'>
                    <h3>Title</h3>
                    <p>Content</p>
                </div>
            </div>
        </div>
    )
}

export default heroSection