import withGaurd from '@components/common/decorators/withGaurd'
import Header from '@components/app/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'
import FilterProvider from '@contexts/filter'

const Layout = () => {
    return (
        <div className="h-screen flex flex-col">
            <FilterProvider>
                <Header />
                <Outlet />
            </FilterProvider>
        </div>
    )
}

export default withGaurd(Layout);