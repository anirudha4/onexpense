import { COLLECTIONS } from '@config/collections';
import { TRANSACTION_TYPES } from '@config/constants';
import { useCollection, useUser } from '@hooks';
import React, { createContext, useCallback, useMemo } from 'react'

export const TransactionContext = createContext();

const TransactionProvider = ({
    children
}) => {
    const { user } = useUser();
    const { entries: transactions, loading } = useCollection(COLLECTIONS.transactions(user?.id), user ? ["userId", "==", user?.id] : null);

    const transactionById = useCallback(id => transactions.find(transaction => transaction.id === id), [transactions]);
    const getTransactionStatistics = useCallback(() => {
        let expense = 0, income = 0, total = 0;
        transactions.forEach(transaction => {
            const amount = parseInt(transaction.amount);
            total += amount;
            if(transaction.type === TRANSACTION_TYPES.EXPENSE) expense += amount;
            if(transaction.type === TRANSACTION_TYPES.INCOME) income += amount;
        });

        return { expense, income, total };
    }, [transactions]);
    const values = {
        transactions,
        loading,
        transactionById,
        getTransactionStatistics
    }
    return (
        <TransactionContext.Provider value={values}>
            {children}
        </TransactionContext.Provider>
    )
}

export default TransactionProvider