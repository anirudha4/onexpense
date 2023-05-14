import React from 'react'
import { ImSpinner2 } from 'react-icons/im';

const Loader = () => {
    return (
        <ImSpinner2 size={30} className='animate-spin text-accent-foreground' />
    )
}

export default Loader