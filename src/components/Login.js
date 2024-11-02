import React, { useRef, useState } from 'react'
import Header from './Header'
import { NETFLIX_BG, SIGN_OUT_ICON } from '../utils/constants'
import { checkValidInput } from '../utils/checkValidInput';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const dispatch = useDispatch();

    const [isLogin, setIsLogin] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const SubmitHandler = () => {
        const message = checkValidInput(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        if (!isLogin) {
            // Register User
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: SIGN_OUT_ICON
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                    }).catch((error) => {
                        setErrorMessage(error.message);
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + '-' + errorMessage);
                });
        }
        else {
            // Login User
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + '-' + errorMessage);
                });
        }
    }

    const ToggleLoginHandler = () => {
        setIsLogin(!isLogin);
    }
    return (
        <>
            <Header />
            <div className='absolute w-screen'>
                <img className='h-screen object-cover w-screen' src={NETFLIX_BG} alt="background" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='bg-black p-12 absolute w-screen sm:w-6/12 md:w-3/12 my-28 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-xl md:text-3xl py-4'>{isLogin ? 'Sign In' : 'Sign Up'}</h1>
                {!isLogin &&
                    <input ref={name} type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />
                }
                <input ref={email} type="text" placeholder='Email ID' className='p-4 my-4 w-full bg-gray-700' />
                <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
                <p className='text-base font-bold text-red-500 py-2'>{errorMessage}</p>
                <button onClick={SubmitHandler} className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isLogin ? 'Sign In' : 'Sign Up'}</button>
                <p onClick={ToggleLoginHandler} className='cursor-pointer mb-4'>{isLogin ? 'New to Netflix? Sign Up Now' : 'Already a member? Sign In Now'}</p>
            </form>
        </>
    )
}

export default Login