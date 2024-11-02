import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {

    const dispatch = useDispatch();
    const nowTrailerMemo = useSelector(store => store.addTrailerVideo)


    const getTrailerVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        const filterData = json.results.filter((movie) => movie.type === "Trailer");
        const trailerData = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailerData.key));
    }

    useEffect(() => {
        !nowTrailerMemo && getTrailerVideos();
    }, [])
}


export default useTrailerVideo