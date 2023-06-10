import withGaurd from '@components/common/decorators/withGaurd'
import Header from '@components/app/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'
import FilterProvider from '@contexts/filter'
import Appbar from '@components/app/Appbar'
import { usePathSelector } from '@hooks'
import DrawerProvider from '@components/common/Drawer'
import TransactionDrawer from '@components/transaction/TransactionDrawer'

const Layout = () => {
    const { transactionId } = usePathSelector();
    return (
        <div className="h-screen flex flex-col">
            <FilterProvider>
                <Header />
                <Outlet />
                <Appbar />
                {transactionId && <TransactionDrawer transactionId={transactionId} />}
            </FilterProvider>
        </div>
    )
}

export default withGaurd(Layout);