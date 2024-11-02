import { useDispatch, useSelector } from "react-redux";
import { upcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";



const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const nowUpcomingMemo = useSelector(store => store.upcomingMovies)

    const getUpcomingMovies = async () => {
        const moviedata = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
        const jsondata = await moviedata.json();
        dispatch(upcomingMovies(jsondata.results));
    }

    useEffect(() => {
        !nowUpcomingMemo && getUpcomingMovies();
    }, [])

}

export default useUpcomingMovies