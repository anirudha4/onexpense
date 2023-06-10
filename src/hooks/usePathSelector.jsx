import React from 'react'
import { useParams } from 'react-router-dom'

const usePathSelector = () => {
    const { transaction_id } = useParams();
    return {
        transactionId: transaction_id
    }
}

export default usePathSelector