import withGaurd from '@components/common/decorators/withGaurd'
import Header from '@components/app/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <Outlet />
        </div>
    )
}

export default withGaurd(Layout);