import React from 'react'
import '@styles/app.css'
import { NAVBAR_LINKS } from './Navbar'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import Modal from '@components/common/Modal'
import Button from '@components/common/Button'
import AddTransaction from '@components/transaction/AddTransaction'
import { TbPlus } from 'react-icons/tb'
const Appbar = () => {
    return (
        <>
            <div className="sm:hidden fixed bottom-20 right-4">
                <Modal trigger={(
                    <Button>
                        <TbPlus size={20} />
                        Add Transaction
                    </Button>
                )}>
                    <Modal.Header title={'Create New Transaction'} withDivider />
                    <Modal.Body>
                        <AddTransaction />
                    </Modal.Body>
                </Modal>
            </div>
            <div className='app-bar'>
                {NAVBAR_LINKS.map(link => (
                    <NavLink key={link.route} className={({ isActive }) => classNames(
                        'px-3 h-full w-full text-sm rounded font-medium',
                        'flex items-center justify-center gap-2',
                        'duration-100',
                        'hover:bg-primary',
                        {
                            'bg-primary text-primary-foreground font-semibold': isActive
                        }
                    )}
                        to={`/app/${link.route}`}
                    >
                        {React.cloneElement(link.icon, {
                            size: 20
                        })}
                    </NavLink>
                ))}
            </div>
        </>
    )
}

export default Appbar