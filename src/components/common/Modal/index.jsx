import React, { cloneElement, createContext, useContext, useState } from 'react'
import classNames from 'classnames';
import { TbX } from 'react-icons/tb';

const ModalContext = createContext();

const Modal = ({ children, trigger }) => {
    const [open, setOpen] = useState(false);

    // handlers
    const closeModal = () => setOpen(false);
    const openModal = () => setOpen(true);
    return (
        <ModalContext.Provider value={{ open, closeModal, openModal }}>
            {cloneElement(trigger, {
                onClick: openModal
            })}
            {open && <div className="fixed top-0 left-0 w-full h-screen z-50 bg-transparent backdrop-blur-[4px] flex items-center justify-center">
                <div className="fixed top-0 left-0 w-full h-screen bg-foreground opacity-10 z-1" />
                <div className="bg-background rounded-lg shadow border z-10 max-w-[500px] w-full">
                    {children}
                </div>
            </div>}
        </ModalContext.Provider>
    )
}


Modal.Header = ({ title, withDivider }) => {
    const { closeModal } = useContext(ModalContext);
    return (
        <div className={classNames(
            "flex items-center justify-between px-5 py-3",
            {
                'border-b': withDivider
            }
        )}>
            <span className="font-medium">
                {title}
            </span>
            <div
                className='
                    h-[24px] w-[24px] min-w-[24px] min-h-[24px] rounded flex items-center justify-center
                    cursor-pointer
                    hover:bg-secondary hover:text-secondary-foreground duration-75
                '
                onClick={closeModal}
            >
                <TbX size={16} />
            </div>
        </div>
    )
}

Modal.Body = ({ children }) => {
    return (
        <div className="p-5">
            {children}
        </div>
    )
}
export default Modal
