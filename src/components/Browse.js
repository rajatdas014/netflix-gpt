
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
import GptBlock from './GptBlock';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
    const gptToggle = useSelector(store => store.gpt.enabled)

    useNowPlayingMovies();
    useTopRatedMovies();
    usePopularMovies();
    useUpcomingMovies();

    return (
        <div>
            <Header />
            {gptToggle ?
                <GptBlock /> :
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            }
        </div>
    )
}

export default Browse