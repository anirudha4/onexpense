import Button from '@components/common/Button';
import TransactionList from '@components/transaction/TransactionList'
import React from 'react'

const Transactions = () => {
    return (
        <div className='col-span-1 h-full border-r p-4'>
            <div className="h-full">
                <div className="flex items-center justify-between p-4">
                    <div className="mb-2">
                        <div className="text-lg font-medium">
                            Your Transactions
                        </div>
                        <div className="text-muted-foreground text-sm muted-text">
                            You made 19 transactions this month.
                        </div>
                    </div>
                </div>
                <TransactionList />
            </div>
        </div>
    )
}

export default Transactions;