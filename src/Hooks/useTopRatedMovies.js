import { useDispatch, useSelector } from "react-redux";
import { topRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";



const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const nowTopRatedMemo = useSelector(store => store.topRatedMovies)

    const getTopRatedMovies = async () => {
        const moviedata = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
        const jsondata = await moviedata.json();
        dispatch(topRatedMovies(jsondata.results));
    }

    useEffect(() => {
        !nowTopRatedMemo && getTopRatedMovies();
    }, [])

}

export default useTopRatedMovies