import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineCategory } from 'react-icons/md';
import { BsEnvelopeX } from 'react-icons/bs';
import { TbLayoutDashboard, TbLogout, TbUser } from 'react-icons/tb';
import { IoWalletOutline } from 'react-icons/io5';


import ActiveWallet from './ActiveWallet';
import Navbar from './Navbar';
import Profile from './Profile';
import Dropdown from '@components/common/Dropdown';
import { PATHS } from '@config/constants';
import Logo from '@components/common/Logo';
import Alert from '@components/common/Alert';
import { useAuth, useUser } from '@hooks';
import classNames from 'classnames';

const Header = ({ }) => {

    const menuOptions = useMemo(() => [
        { id: 1, label: 'Profile', route: PATHS.PROFILE, icon: <TbUser /> },
        { id: 2, label: 'Manage Categories', route: PATHS.CATEGORIES, icon: <MdOutlineCategory /> },
        { id: 2, label: 'Manage Wallets', route: PATHS.WALLETS, icon: <IoWalletOutline /> },
        { id: 1, label: 'Customize', route: PATHS.PROFILE, icon: <TbLayoutDashboard /> },
    ], [])
    const { user } = useUser();
    const { logout } = useAuth();
    return (
        <div className="
            px-4 border-b sticky backdrop-blur-sm top-0 left-0 z-50
        ">
            <div className={classNames(
                "container flex items-center justify-between h-16 min-h-[4rem]"
            )}>
                <div className="flex items-center gap-5">
                    {/* logo */}
                    <Logo />
                    {/* divider */}
                    <div className="h-6 w-[1px] border-x"></div>
                    {/* navbar */}
                    <Navbar />
                </div>
                <div className="flex items-center gap-3">
                    {!user.isVerified && (
                        <Alert
                            variant={'destructive'}
                            text={'Email not verified'}
                            icon={<BsEnvelopeX />}
                        />
                    )}
                    {user.isVerified && (
                        <div className='flex items-center'>
                            <ActiveWallet />
                        </div>
                    )}
                    <Dropdown trigger={<div><Profile /></div>}>
                        <div className='flex flex-col px-2 py-1'>
                            <span className="text-sm font-medium">
                                {user.name}
                            </span>
                            <span className='text-muted-foreground text-xs truncate'>
                                {user.email}
                            </span>
                        </div>
                        <div className="border-b"></div>
                        {menuOptions.map(option => (
                            <Link to={option.route} key={option.id}>
                                <Dropdown.Item key={option.id}>
                                    {React.cloneElement(option.icon, {
                                        size: 17
                                    })}
                                    {option.label}
                                </Dropdown.Item>
                            </Link>
                        ))}
                        <div className="border-b"></div>
                        <Dropdown.Item variant='destructive' onClick={logout}>
                            <TbLogout size={17} />
                            <span>Logout</span>
                        </Dropdown.Item>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}

export default Header