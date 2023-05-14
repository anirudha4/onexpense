// import { BsPiggyBank } from 'react-icons/bs';
// import { MdOutlineLocalGroceryStore, MdOutlineMovieFilter } from 'react-icons/md';
// import { TbCashBanknote, TbHomeDollar } from 'react-icons/tb';
import { HiOutlineInboxStack } from 'react-icons/hi2';
import { useTransaction } from '@hooks';
import TransactionItem from './TransactionItem';
import Loader from '@components/app/Loader';

const TransactionList = () => {
    const gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))';
    const { transactions, loading } = useTransaction();

    if (loading) {
        return (<Loader />)
    }
    return (
        <>
            {loading ? (
                <div className="flex items-center justify-center mt-20 flex-col gap-4">
                    <Loader />
                </div>
            ) :
                <>
                    {transactions.length === 0 && (
                        <div className="flex items-center justify-center mt-20 flex-col gap-4">
                            <HiOutlineInboxStack size={100} className='text-muted-foreground' />
                            <div className="text-2xl muted-text text-muted-foreground">
                                No Transactions.
                            </div>
                        </div>
                    )}
                    <div style={{ gridTemplateColumns }} className='transaction-grid'>
                        {transactions.map(transaction => (
                            <TransactionItem
                                key={transaction.id}
                                {...transaction}
                                isGridView={false}
                            />
                        ))}
                    </div>
                </>
            }
        </>
    )
}

export default TransactionList