import React from 'react'
import { ReactComponent as Avatar_1 } from '@assets/avatars/avatar-1.svg';
const Profile = () => {
    return (
        <div className='bg-accent rounded-md h-10 w-10 min-w-[2.5rem] cursor-pointer'>
            <Avatar_1 className="h-full w-full" />
        </div>
    )
}

export default Profile