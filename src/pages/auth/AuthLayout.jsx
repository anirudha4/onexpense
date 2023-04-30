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
        <div className="grid grid-cols-2 h-screen">
            <div className="w-full bg-primary"></div>
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