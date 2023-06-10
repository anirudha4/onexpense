import Button from '@components/common/Button';
import Drawer from '@components/common/Drawer'
import { COLLECTIONS } from '@config/collections';
import { PATHS } from '@config/constants';
import { useCategory, useMutation, useTransaction, useUser } from '@hooks';
import React, { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

const TransactionDrawer = ({ transactionId }) => {

    // selectors
    const { user } = useUser();

    // hooks
    const navigate = useNavigate();
    const { transactionById } = useTransaction();
    const { getCategoryById } = useCategory();

    // mutation
    const { deleteDocument: deleteTransaction, loading } = useMutation(COLLECTIONS.transactions(user.id));
    
    // memos
    const transaction = useMemo(() => transactionById(transactionId), [transactionId]);
    const category = useMemo(() => getCategoryById(transaction?.categoryId), [transaction?.categoryId]);

    // handlers
    const onClose = () => navigate(PATHS.DASHBOARD);

    const handleDelete = useCallback(() => {
        deleteTransaction(transactionId)
        navigate(PATHS.DASHBOARD);
    }, [transactionId]);

    if (!transaction) return null
    return (
        <Drawer onClose={onClose} title={transaction.name}>
            <Drawer.Content>
                <Drawer.Section title={'Description'}>
                    {transaction.description || "NA"}
                </Drawer.Section>
                <Drawer.Section title={'Amount'}>
                    Rs. {transaction.amount}
                </Drawer.Section>
                <Drawer.Section title={'Category'}>
                    <div style={{ backgroundColor: category.color }} className="min-h-[10px] min-w-[10px] rounded"></div>
                    {category.name}
                </Drawer.Section>
                <Drawer.Section title={'Type'}>
                    {transaction.type}
                </Drawer.Section>
            </Drawer.Content>
            <Drawer.Footer>
                <Button onClick={handleDelete} variant='destructive'>Delete</Button>
            </Drawer.Footer>
        </Drawer>
    )
}

export default TransactionDrawer