import React from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

import { PATHS } from '@config/constants'

const NAVBAR_LINKS = [
    { name: 'Overview', route: PATHS.DASHBOARD },
    { name: 'Insights', route: PATHS.INSIGHTS },
    { name: 'Invoices', route: PATHS.INVOICES },
    { name: 'Loans', route: PATHS.LOANS }
]
const Navbar = () => {
    return (
        <div className='flex items-center gap-1'>
            {NAVBAR_LINKS.map(link => (
                <NavLink key={link.route} className={({ isActive }) => classNames(
                    'px-3 py-2 text-sm rounded font-medium',
                    'flex items-center gap-2',
                    'duration-100',
                    'hover:bg-secondary',
                    {
                        'bg-secondary font-semibold': isActive
                    }
                )}
                    to={link.route}
                >
                    {link.name}
                </NavLink>
            ))}
        </div>
    )
}

export default Navbar