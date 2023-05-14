import { PATHS } from '@config/constants'
import { useCategory } from '@hooks'
import classNames from 'classnames'
import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'

const TransactionItem = ({
    id,
    name,
    type,
    amount,
    categoryId,
    isGridView
}) => {
    const { getCategoryById } = useCategory();
    const category = useMemo(() => getCategoryById(categoryId), [categoryId]);

    return (
        <Link to={PATHS.TRANSACTION.replace(':transaction_id', id)}>
            <div className={classNames(
                'p-3 pr-4 flex gap-3 justify-between hover:bg-secondary duration-100 group cursor-pointer rounded-md',
                {
                    'items-start': isGridView
                }
            )}>
                <div className="flex gap-4 truncate">
                    {/* <div className="h-10 w-10 min-h-10 max-h-10 rounded border group-hover:bg-accent flex items-center justify-center duration-100">
                        {React.cloneElement(categoryIcon, {
                            size: 18
                        })}
                    </div> */}
                    <div className="flex flex-col flex-1 gap-1 truncate">
                        <p className='text-sm font-medium truncate'>{name}</p>
                        <span className="text-muted-foreground muted-text text-xs">
                            {category.name}
                        </span>
                    </div>
                </div>
                <div className="text-sm flex items-center muted-text font-medium whitespace-nowrap">
                    {type === 'expense' ? '-' : '+'} ₹ {amount}
                </div>
            </div>
        </Link>
    )
}

export default React.memo(TransactionItem);