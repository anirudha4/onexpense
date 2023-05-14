import React from 'react'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
    return (
        <div className="container h-full">
            <Outlet />
        </div>
    )
}

export default DashboardLayout