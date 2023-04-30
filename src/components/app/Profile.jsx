import React from 'react'
import { ReactComponent as Avatar_1 } from '@assets/avatars/avatar-1.svg';
import useTheme from '@hooks/useTheme';
const Profile = () => {
    const { toggleTheme } = useTheme();
    return (
        <div className='bg-accent rounded-md h-10 w-10 cursor-pointer'>
            <Avatar_1 className="h-full w-full" />
        </div>
    )
}

export default Profile