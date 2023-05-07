import React from 'react'
import { FaRupeeSign } from 'react-icons/fa';

const Stat = ({
    title,
    icon,
    value,
    type,
    muted
}) => {
    return (
        <div className='w-full border p-4 rounded-md flex flex-col'>
            <div className="flex items-center justify-between mb-2">
                <p className='text-md font-medium'>{title}</p>
                <div className="text-muted-foreground">
                    {React.cloneElement(icon, {
                        size: 20,
                        title: type.toUpperCase()
                    })}
                </div>
            </div>
            <div className="flex flex-col">
                <div className="text-2xl muted-text font-semibold flex items-center">
                    <FaRupeeSign size={20} /> {value}
                </div>
                <div className="text-muted-foreground text-xs">
                    {muted}
                </div>
            </div>
        </div>
    )
}

export default Stat