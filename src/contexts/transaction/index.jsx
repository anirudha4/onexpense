import { COLLECTIONS } from '@config/collections';
import { useCollection, useUser } from '@hooks';
import React, { createContext, useMemo } from 'react'

export const TransactionContext = createContext();

const TransactionProvider = ({
    children
}) => {
    const { user } = useUser();
    const { entries: transactions, loading } = useCollection(COLLECTIONS.transactions(user.id));

    const transactionWithCompute = useMemo(() => {
    }, [transactions])
    const values = {
        transactions,
        loading
    }
    return (
        <TransactionContext.Provider value={values}>
            {children}
        </TransactionContext.Provider>
    )
}

export default TransactionProvider