import { useDispatch, useSelector } from "react-redux";
import { nowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";



const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMemo = useSelector(store => store.nowPlayingMovies)

    const getNowPlayingMovies = async () => {
        const moviedata = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const jsondata = await moviedata.json();
        dispatch(nowPlayingMovies(jsondata.results));
    }

    useEffect(() => {
        !nowPlayingMemo && getNowPlayingMovies();
    }, [])

}

export default useNowPlayingMovies