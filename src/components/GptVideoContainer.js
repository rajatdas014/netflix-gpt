import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptVideoContainer = () => {
    const { movienames, movieresults } = useSelector(store => store.gpt);
    if (!movienames) return null;
    return (
        <div className='bg-black p-4 m-4 text-white bg-opacity-85'>
            {movienames.map((movieName, index) => {

                return (
                    <MovieList
                        key={movieName}
                        title={movieName}
                        movies={movieresults[index] && movieresults[index].results ? movieresults[index].results : []} // Pass the correct array
                    />
                );
            })}
        </div>
    )
}

export default GptVideoContainer