import Button from '@components/common/Button'
import Popup from '@components/common/Popup'
import React from 'react'

const Header = () => {
    return (
        <div className='flex items-center justify-between'>
            <div className="text-3xl font-bold">
                Dashboard
            </div>
            <Popup trigger={<Button variant='ghost'>Hello There</Button>}>
                <div className='p-4 bg-card'>
                    <h2>Popup Title</h2>
                </div>
            </Popup>
        </div>
    )
}

export default Header