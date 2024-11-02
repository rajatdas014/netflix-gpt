import { useDispatch, useSelector } from "react-redux";
import { popularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";



const usePopularMovies = () => {
    const dispatch = useDispatch();
    const nowPopularMemo = useSelector(store => store.popularMovies)

    const getPopularMovies = async () => {
        const moviedata = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const jsondata = await moviedata.json();
        dispatch(popularMovies(jsondata.results));
    }

    useEffect(() => {
        !nowPopularMemo && getPopularMovies();
    }, [])

}

export default usePopularMovies