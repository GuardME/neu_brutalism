import Image from 'next/image'
import React from 'react'

type Props = {}

const heroSection = (props: Props) => {
    const iconsone = "https://ucarecdn.com/15b40295-8ba7-4462-bd11-d7b4c6353922/animation.svg"
    const iconstwo = "https://ucarecdn.com/a3386fbd-7da9-4d0b-9583-11240ae029fe/audio.svg"
    const iconstthree = "https://ucarecdn.com/8d9ca7c3-501d-4080-9086-a395cdf8ed54/business.svg"

    return (
        <div>
            <h2 className='text-4xl text-center mt-6'>
                Trending
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <div className='bg-pink-500 p-4 border-2 line-clamp-7 shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]'>
                    <h3>Animation</h3>
                    <Image
                        alt='imagesatu'
                        src={iconsone}
                        width={100}
                        height={100}
                    />
                    <p>Perfect your craft with the same tools used at Dreamworks and Pixar.</p>
                    <div className="items-start space-y-4 justify-start flex flex-col w-full py-4 px-2">
                        <div className="flex flex-col">
                            <button className="tag-btn peer z-0">Blender</button>
                        </div>
                    </div>
                </div>

                <div className='bg-blue-500 p-4 border-2 line-clamp-7 shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]'>
                    <h3>Audio</h3>
                    <Image
                        alt='imagedua'
                        src={iconstwo}
                        width={100}
                        height={100}
                    />
                    <p>Open your ears and mind to interviews, meditations, and true crime thrillers..</p>
                    <div className="items-start space-y-4 justify-start flex flex-col w-full py-4 px-2">
                        <div className="flex flex-col">
                            <button className="tag-btn peer z-0">Meditation</button>                         
                        </div>
                    </div>
                </div>

                <div className='bg-yellow-500 p-4 border-2 line-clamp-7 shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]'>
                <h3>Business & Money</h3>
                    <Image
                        alt='imagetiga'
                        src={iconstthree}
                        width={100}
                        height={100}
                    />
                    <p>Learn to earn in an increasingly unpredictable world.</p>
                    <div className="items-start space-y-4 justify-start flex flex-col w-full py-4 px-2">
                        <div className="flex flex-col">
                            <button className="tag-btn peer z-0">Notion Template</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default heroSection