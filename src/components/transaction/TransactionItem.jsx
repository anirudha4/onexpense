import React from 'react'
import { FaRupeeSign } from 'react-icons/fa'

const TransactionItem = ({
    name,
    type,
    amount,
    category,
    categoryIcon
}) => {
    return (
        <div className='p-3 pr-4 flex gap-2 justify-between hover:bg-secondary duration-100 group cursor-pointer rounded-md'>
            <div className="flex gap-4">
                    <div className="h-10 w-10 min-h-10 max-h-10 rounded border group-hover:bg-accent flex items-center justify-center duration-100">
                    {React.cloneElement(categoryIcon, {
                        size: 18
                    })}
                </div>
                <div className="flex flex-col gap-1">
                    <p className='text-sm font-medium'>{name}</p>
                    <span className="text-muted-foreground muted-text text-xs">
                        {category}
                    </span>
                </div>
            </div>
            <div className="text-sm flex items-center muted-text font-medium">
                ₹ {amount}
            </div>
        </div>
    )
}

export default TransactionItem