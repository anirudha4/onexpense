import Button from '@components/common/Button'
import Modal from '@components/common/Modal'
import AddTransaction from '@components/transaction/AddTransaction'
import { useTransaction } from '@hooks'
import React from 'react'

const TransactionSectionHeader = () => {
    const { transactions } = useTransaction();
    return (
        <div className="flex items-center justify-between pb-4 border-b">
            <div>
                <div className="text-lg font-medium">
                    Your Transactions
                </div>
                <div className="text-muted-foreground text-sm muted-text">
                    You made {transactions.length} transactions this month.
                </div>
            </div>
            <div className="sm:flex gap-2 items-center hidden">
                <Modal trigger={(
                    <Button>
                        Add Transaction
                    </Button>
                )}>
                    <Modal.Header title={'Create New Transaction'} withDivider />
                    <Modal.Body>
                        <AddTransaction />
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}

export default TransactionSectionHeader