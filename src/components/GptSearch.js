import React, { useRef } from 'react'
import { API_OPTIONS, NETFLIX_BG } from '../utils/constants'
import lang from '../utils/langContants'
import { useDispatch, useSelector } from 'react-redux'
import client from '../utils/gptContants'
import { gptMovies } from '../utils/gptSlice'

const GptSearch = () => {
    const dispatch = useDispatch();
    const getLang = useSelector(store => store.gpt.lang);
    const searchInput = useRef(null);


    const tmdbAPI = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        return json;
    }

    const gptSearchHandler = async () => {
        const inputSearchPanel =
            "Act as a movie recommendation system and suggest some movies names for the query : "
            + searchInput.current.value +
            " only give names of 5 movies, comma seperated like the example resultsgiven ahaed. Example Result = Don, Chup Chup Ke, Sholay, Golmaal, Koi Mil Gaya"
        const data = await client.chat.completions.create({
            messages: [{ role: 'user', content: inputSearchPanel }],
            model: 'gpt-3.5-turbo',
        });

        if (!data?.choices) return null;

        const gptResults = data?.choices[0]?.message?.content.split(",");

        const tmdbPromises = gptResults.map((movie) => tmdbAPI(movie));
        const tmdbResults = await Promise.all(tmdbPromises);

        dispatch(gptMovies({ movienames: gptResults, movieresults: tmdbResults }))

    }

    return (
        <>
            <div className='fixed -z-10 w-screen'>
                <img className='h-screen object-cover w-screen' src={NETFLIX_BG} alt="background" />
            </div>
            <div className='pt-[40%] md:pt-[10%] flex justify-center'>
                <form className='bg-black w-screen md:w-1/2 grid grid-cols-12'
                    onSubmit={(e) => e.preventDefault()}>
                    <input
                        ref={searchInput}
                        className='col-span-9 p-4 m-4'
                        type='text'
                        placeholder={lang[getLang].GptSearch} />
                    <button
                        onClick={gptSearchHandler}
                        className='bg-red-800 col-span-3 m-4 ml-0 py-2 px-4 text-white rounded-lg'>
                        {lang[getLang].search}
                    </button>
                </form>
            </div>
        </>
    )
}

export default GptSearch