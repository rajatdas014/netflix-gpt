import React, { useEffect } from 'react'
import { NETFLIX_ICON, SUPPORTED_LANGUAGE } from '../utils/constants'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser, resetUserSlice } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom';
import { gptToggleView, resetGptSlice, selectLang } from '../utils/gptSlice';
import { resetMovieSlice } from '../utils/movieSlice';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const gptToggle = useSelector(store => store.gpt.enabled)

    const LogoutHandler = () => {
        signOut(auth).then(() => {
            dispatch(removeUser());
            dispatch(gptToggleView());
            dispatch(resetGptSlice());
            dispatch(resetMovieSlice())
            dispatch(resetUserSlice())
            navigate('/')
        }).catch((error) => {
            navigate('/error')
        });
    }
    const gptToggleHandler = () => {
        dispatch(gptToggleView());
    }

    const langSelectorHandler = (e) => {
        dispatch(selectLang(e.target.value))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const {
                    uid,
                    email,
                    displayName,
                    photoURL } = user;
                dispatch(addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL
                }));
                navigate('/browse')
            } else {
                dispatch(removeUser());
                navigate('/')
            }
        });
        return (() => {
            unsubscribe();
        })
    }, [])


    return (
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between flex-col md:flex-row'>
            <img className='w-44 mx-auto md:mx-0' src={NETFLIX_ICON} alt="icon" />
            {user && <div className='flex justify-around md:justify-between'>
                {gptToggle &&
                    <select
                        onChange={langSelectorHandler}
                        className='bg-zinc-800 text-white py-3 px-4 my-5 mr-2 rounded-lg cursor-pointer'>
                        {SUPPORTED_LANGUAGE.map((item, index) => <option key={index} value={item.identifier}>{item.value}</option>)}
                    </select>
                }
                <div onClick={gptToggleHandler}
                    className='bg-purple-800 text-white py-3 px-4 my-5 mr-2 flex justify-center items-center rounded-xl cursor-pointer'>
                    {gptToggle ? 'Home' : 'GPT Search'}
                </div>
                <div onClick={LogoutHandler} className='flex items-center cursor-pointer'>
                    <img className='w-12 h-12 hidden md:block' src={user.photoURL} alt="sign-out-icon" />
                    <p className='text-white font-bold'>(Sign Out)</p>
                </div>
            </div>
            }
        </div>
    )
}

export default Header