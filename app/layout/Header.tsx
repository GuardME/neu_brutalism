import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='border-b flex justify-between'>
        <div className='text-4xl px-2 py-4'>
            Neubrutal
        </div>
        <button className='px-2 py-4  text-white bg-black'>
            Sign in
        </button>
    </div>
  )
}

export default Header