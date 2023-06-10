import React, { useMemo } from 'react';
import { MdOutlineCategory } from 'react-icons/md';
import { BsEnvelopeX } from 'react-icons/bs';
import classNames from 'classnames';
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

const Header = ({ }) => {

    const { user } = useUser();
    const { logout } = useAuth();

    const menuOptions = useMemo(() => [
        { id: 1, label: 'Profile', route: PATHS.PROFILE, icon: <TbUser /> },
        { id: 2, label: 'Manage Categories', route: PATHS.CATEGORIES, icon: <MdOutlineCategory /> },
        { id: 3, label: 'Manage Wallets', route: PATHS.WALLETS, icon: <IoWalletOutline /> },
        { id: 4, label: 'Customize', route: PATHS.PROFILE, icon: <TbLayoutDashboard /> },
        { id: 5, label: 'Logout', handler: logout, icon: <TbLogout /> }
    ], [])
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
                    <Dropdown trigger={<Profile />} options={menuOptions} />
                </div>
            </div>
        </div>
    )
}

export default Header