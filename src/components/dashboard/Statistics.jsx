import React from 'react'
import Stat from './Stat'
import { BsCreditCard2Back } from 'react-icons/bs';
import { TbTrendingDown, TbTrendingUp, TbBuildingBank } from 'react-icons/tb'

const Statistics = () => {
    return (
        <div className='statistics-grid'>
            <Stat
                title={'Total Balance'}
                type="total"
                icon={<BsCreditCard2Back />}
                value={4000}
                muted={'+20% from last month'}
            />
            <Stat
                title={'Expense'}
                type="expense"
                icon={<TbTrendingDown />}
                value={2000}
                muted={'-2% from last month'}
            />
            <Stat
                title={'Income'}
                type="income"
                icon={<TbTrendingUp />}
                value={6000}
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