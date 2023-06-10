import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from '@hooks'
import { PATHS } from '@config/constants';

const AuthLayout = () => {
    const { isLoggedIn } = useAuth();
    if (isLoggedIn) {
        return <Navigate to={PATHS.APP} />
    }
    return (
        <div className="grid grid-cols-1 h-screen sm:grid-cols-2">
            <div className="relative -right-32 rounded-lg w-full bg-primary hidden sm:flex -skew-y-12 scale-75 items-center justify-center flex-col gap-2">
            </div>
            <div className="max-w-[400px] w-full flex items-center justify-center flex-col m-auto">
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout

AuthLayout.Header = ({ title, subTitle }) => (
    <>
        <h2 className="text-3xl font-medium">
            {title}
        </h2>
        <p className="text-lg text-muted-foreground muted-text">
            {subTitle}
        </p>
    </>
)