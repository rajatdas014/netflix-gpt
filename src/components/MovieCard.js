import React from 'react'
import { VIDEO_CARD_IMG } from '../utils/constants'

const MovieCard = ({ poster_path }) => {
    return poster_path && (
        <div className='w-36 md:w-48 pr-4'>
            <img className='rounded-md' src={VIDEO_CARD_IMG + poster_path} alt="card-img" />
        </div>
    )
}

export default MovieCard