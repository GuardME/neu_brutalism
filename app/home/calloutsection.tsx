import React from 'react'

type Props = {}

const calloutsection = (props: Props) => {

    return (
        <div className='border-t-2 border-b-2 mt-12 bg-sky-800 p-5'>
          <div className='grid grid-cols-12 container'>
            <div className="col-span-8 flex flex-col place-self-center">
                <h2 className='semi-bold text-4xl mb-5'>Stay with We</h2>
                <p className="max-w-4xl">
                Stay up-to-date with the latest tech news and announcements by reading our curated articles, ranging from bite-sized pieces to in-depth features.
                </p>
                <div className='mt-4'>
                    <input type="email" name="email" id="email" placeholder='Enter your email' className='border-2 rounded-full rounded-r-none py-3 px-4 bg-gray-200 text-gray-800 outline-none placeholder-gray-500 focus:bg-gray-100 flex-1 p-2' />
                    <button className=' border-2 rounded-full rounded-l-none py-3 px-4 bg-gray-900 text-gray-100 font-semibold uppercase hover:bg-gray-800'>Subscribe</button>
                </div>
            </div>
          </div>
        </div>
    )
}

export default calloutsection