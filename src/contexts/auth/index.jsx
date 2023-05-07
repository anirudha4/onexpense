import React, { createContext } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useImmerReducer } from 'use-immer';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '@reducers';
import { authCreators } from '@actions';
import { authentication, gProvider } from '@config/firebase';
import { redirectTo } from '@utils/redirect';
import { ImSpinner2 } from 'react-icons/im';
import { PATHS } from '@config/constants';

// initial state
const initialState = {
    isLoggedIn: false,
    isLoggingIn: false,
    error: null
}

// 
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useImmerReducer(auth, initialState);

    const [user, isLoading] = useAuthState(authentication, {
        onUserChanged: (user) => user ? dispatch(authCreators.authSuccess()) : dispatch(authCreators.authLogout())
    });

    // handlers
    const login = async () => {
        try {
            dispatch(authCreators.authRequest());
            const response = await signInWithPopup(authentication, gProvider);
            dispatch(authCreators.authSuccess(response.user));
            redirectTo(PATHS.APP);
        } catch (err) {
            dispatch(authCreators.authError(err.code));
        }
    }

    const standardLogin = async (email, password) => {
        try {
            dispatch(authCreators.authRequest());
            const response = await signInWithEmailAndPassword(authentication, email, password);
            dispatch(authCreators.authSuccess(response.user));
            redirectTo(PATHS.APP);
        } catch (err) {
            dispatch(authCreators.authError(err.code));
        }
    }
    const register = async (email, password) => {
        try {
            dispatch(authCreators.authRequest());
            const response = await createUserWithEmailAndPassword(authentication, email, password);
            dispatch(authCreators.authSuccess(response.user));
            redirectTo(PATHS.APP);
        } catch (err) {
            dispatch(authCreators.authError(err.code));
        }
    }

    const logout = () => signOut(authentication);

    const values = {
        ...state,
        isLoading,
        user,
        login,
        standardLogin,
        register,
        logout
    }
    if (isLoading) {
        return (
            <div className='h-screen flex items-center justify-center'>
                <ImSpinner2 size={30} className='animate-spin text-accent-foreground' />
            </div>
        )
    }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider