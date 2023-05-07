import React from 'react'
import { TbCashBanknote } from 'react-icons/tb'

const ActiveWallet = () => {
    return (
        <div className='h-10 rounded-md border flex items-center justify-center cursor-pointer' title='Cash Wallet'>
            <div className="px-4 text-sm font-medium border-r">
                <TbCashBanknote size={20} />
            </div>
            <div className="px-4 flex items-center gap-2">
                <p className='font-medium text-sm'>
                    Cash
                </p>
            </div>
        </div>
    )
}

export default ActiveWallet