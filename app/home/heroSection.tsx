import React from 'react'
import Image from 'next/image'
import Link from "next/link";

type Props = {}

const heroSection = (props: Props) => {
  return (
    <div className="border-b bg-[#EEF2ED]">
      <section className='grid container grid-cols-1 sm:grid-cols-12 pt-6 pb-8'>
        <div className='col-span-7 w-full place-self-center text-center sm:text-left justify-self-start'>
          <h1 className='text-2xl sm:text-4xl md:text-6xl md:leading-normal'>Tech News for IT Industries</h1>
          <h2>up-to-date with the latest tech news and announcements.</h2>
          <ul>
            <li><span className='mr-2'>✔️</span>IT News</li>
            <li><span className='mr-2'>✔️</span>Product News</li>
            <li><span className='mr-2'>✔️</span>Innovation Spotlights</li>
          </ul>
          <button 
            className='neu_button_two'>Browse Articles</button>
        </div>
        <div className='col-span-5 place-self-center'>
          {/* <Image src="/coffee.png" width={300} height={300} alt="Person walking" /> */}
        </div>
      </section>
    </div>
  )
}

export default heroSection