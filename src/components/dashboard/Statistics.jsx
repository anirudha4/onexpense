import React, { useMemo } from 'react';
import Stat from './Stat';
import { BsCreditCard2Back } from 'react-icons/bs';
import { TbTrendingDown, TbTrendingUp, TbBuildingBank } from 'react-icons/tb';
import { useTransaction } from '@hooks';

const Statistics = () => {
    const { getTransactionStatistics, transactions } = useTransaction();
    const { total, income, expense } = useMemo(() => getTransactionStatistics(), [transactions]);
     return (
        <div className='statistics-grid'>
            <Stat
                title={'Total Balance'}
                type="total"
                icon={<BsCreditCard2Back />}
                value={total}
                muted={'+20% from last month'}
            />
            <Stat
                title={'Expense'}
                type="expense"
                icon={<TbTrendingDown />}
                value={expense}
                muted={'-2% from last month'}
            />
            <Stat
                title={'Income'}
                type="income"
                icon={<TbTrendingUp />}
                value={income}
                muted={'+17% from last month'}
            />
            <Stat
                title={'Investment'}
                type="investment"
                icon={<TbBuildingBank />}
                value={200}
                muted={'+17% from last month'}
            />
        </div>
    )
}

export default Statistics