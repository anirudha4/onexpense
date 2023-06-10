import React from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

import { PATHS } from '@config/constants'
import { TbLayoutDashboard } from 'react-icons/tb'
import { MdOutlineInsights, MdOutlineReceiptLong } from 'react-icons/md'
import { RiBankLine } from 'react-icons/ri'

export const NAVBAR_LINKS = [
    { name: 'Overview', route: PATHS.DASHBOARD, icon: <TbLayoutDashboard /> },
    { name: 'Insights', route: PATHS.INSIGHTS, icon: <MdOutlineInsights /> },
    { name: 'Invoices', route: PATHS.INVOICES, icon: <MdOutlineReceiptLong /> },
    { name: 'Loans', route: PATHS.LOANS, icon: <RiBankLine /> }
]
const Navbar = () => {
    return (
        <div className={classNames(
            'md:flex items-center gap-1',
            'hidden'
        )}>
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