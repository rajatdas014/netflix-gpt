import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-screen aspect-video py-[15%] px-12 absolute bg-gradient-to-r from-black text-white'>
            <h2 className='font-bold text-lg md:text-3xl'>{title}</h2>
            <p className='w-1/4 my-2 hidden md:block'>{overview}</p>
            <div className='flex mt-4'>
                <button className='py-1 px-2 text-lg md:py-2 md:px-6 md:text-xl bg-white rounded-lg text-black hover:bg-opacity-80'>▶️  Play</button>
                <button className='hidden md:block py-2 px-6 text-xl bg-gray-500 bg-opacity-70 rounded-lg ml-2'>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle