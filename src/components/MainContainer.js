import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const movies = useSelector(store => store.movies.nowPlayingMovies);
    if (!movies || movies.length === 0) return;
    const renderMovie = movies[0];
    const { original_title, overview, id } = renderMovie;
    
    return (
        <div className='pt-36 bg-black md:pt-0 md:bg-none'>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer