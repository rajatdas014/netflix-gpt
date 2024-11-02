import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    return movies && (
        <div className='py-1 pl-3 md:pl-8 md:py-3'>
            <h1 className='text-base md:text-xl py-3 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll'>
                <div className='flex'>
                    {movies.map((movie) => <MovieCard key={movie.id} poster_path={movie.poster_path} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieList