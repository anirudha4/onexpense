import TransactionList from '@components/transaction/TransactionList'
import React from 'react'
import TransactionSectionHeader from './TransactionSectionHeader';

const Transactions = () => {
    return (
        <div className='col-span-1 h-full p-4'>
            <div className="h-full overflow-auto flex flex-col gap-2">
                <TransactionSectionHeader />
                <TransactionList />
            </div>
        </div>
    )
}

export default Transactions;