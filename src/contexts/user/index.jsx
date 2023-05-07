import React, { createContext, useEffect } from 'react'
import { useImmerReducer } from 'use-immer';

import { user } from '@reducers';
import { useAuth } from '@hooks';
import { User } from '@lib/firebase/users';
import { authentication } from '@config/firebase';
import { ImSpinner2 } from 'react-icons/im';
import { userCreators } from '@actions';

const initialState = {
    user: null,
    isLoading: true,
    error: null
}

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [state, dispatch] = useImmerReducer(user, initialState);

    const { isLoggedIn } = useAuth();

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(userCreators.userRequest());
            // fetch user here
            User.getOne(authentication.currentUser.uid).then(response => {
                const payload = {
                    id: response.id,
                    ...response.data()
                }
                dispatch(userCreators.userSuccess(payload));
            }).catch(err => dispatch(userCreators.userError(err.code)));
        } else {
            dispatch(userCreators.userNotFound());
        }
    }, [isLoggedIn])

    // prepare slice
    const values = {
        ...state
    }
    if (state.isLoading) {
        return (
            <div className='h-screen flex items-center justify-center gap-2'>
                <ImSpinner2 size={30} className='animate-spin text-accent-foreground' />
                <div className="text-muted-foreground">
                    Just a moment!
                </div>
            </div>
        )
    }
    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider