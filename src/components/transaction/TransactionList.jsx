import React from 'react'
import { BsPiggyBank } from 'react-icons/bs';
import { MdOutlineLocalGroceryStore, MdOutlineMovieFilter } from 'react-icons/md';
import { TbCashBanknote, TbHomeDollar } from 'react-icons/tb';
import TransactionItem from './TransactionItem';

const TransactionList = () => {
    const data = [
        { id: 1, name: 'Movies Night', type: 'expense', amount: '100.00', category: 'Entertainment', categoryIcon: <MdOutlineMovieFilter /> },
        { id: 2, name: 'Salary', type: 'income', amount: '100000.00', category: 'Salary', categoryIcon: <TbCashBanknote /> },
        { id: 3, name: 'House Rent', type: 'expense', amount: '20000.00', category: 'Rent', categoryIcon: <TbHomeDollar /> },
        { id: 4, name: 'Tax Saving Mutual Fund', type: 'investment', amount: '30000.00', category: 'Investment', categoryIcon: <BsPiggyBank /> },
        { id: 5, name: 'Groceries for April', type: 'expense', amount: '5000.00', category: 'Groceries', categoryIcon: <MdOutlineLocalGroceryStore /> },
        { id: 1, name: 'Netflix Subscription', type: 'expense', amount: '100.00', category: 'Entertainment', categoryIcon: <MdOutlineMovieFilter /> },
        { id: 2, name: 'Salary', type: 'income', amount: '100000.00', category: 'Salary', categoryIcon: <TbCashBanknote /> },
        { id: 3, name: 'House Rent', type: 'expense', amount: '20000.00', category: 'Rent', categoryIcon: <TbHomeDollar /> },
        { id: 4, name: 'Tax Saving Mutual Fund', type: 'investment', amount: '30000.00', category: 'Investment', categoryIcon: <BsPiggyBank /> },
        { id: 5, name: 'Groceries for April', type: 'expense', amount: '5000.00', category: 'Groceries', categoryIcon: <MdOutlineLocalGroceryStore /> },

    ]
    return (
        <div className='flex flex-col gap-2 pb-3 max-h-full overflow-y-scroll'>
            {data.map(transaction => (
                <TransactionItem
                    {...transaction}
                />
            ))}
        </div>
    )
}

export default TransactionList