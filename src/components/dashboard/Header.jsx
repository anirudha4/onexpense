import TransactionFilter from './TransactionFilter'

const Header = () => {
    return (
        <div className='flex items-center justify-between p-4'>
            <div className="text-3xl font-bold">
                Dashboard
            </div>

            <TransactionFilter />
        </div>
    )
}

export default Header