import Logo from '@components/common/Logo';
import { useAuth } from '@hooks'
import React from 'react'
import Navbar from './Navbar';
import Profile from './Profile';

const Header = ({ }) => {
    const { user } = useAuth();
    return (
        <div className="flex h-16 min-h-[4rem] items-center justify-between px-4 border-b">
            <div className="flex items-center gap-5">
                {/* logo */}
                <Logo />
                {/* divider */}
                <div className="h-6 w-[1px] border-x"></div>
                {/* navbar */}
                <Navbar />
            </div>
            <div className="">
                <Profile />
            </div>
        </div>
    )
}

export default Header