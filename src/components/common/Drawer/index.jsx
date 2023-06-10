import { Transition } from '@headlessui/react';
import React, { createContext, useContext, useState } from 'react'
import { TbX } from 'react-icons/tb';

const DrawerContext = createContext({});
const Drawer = ({ children, onClose, title, show }) => {
    const values = {
        onClose,
        title
    }
    return (
        <Transition
            show
        >
            <DrawerContext.Provider value={values}>
                <div className="drawer-container">
                    <Drawer.Header />
                    <Drawer.Content>
                        {children}
                    </Drawer.Content>
                </div>
            </DrawerContext.Provider>
        </Transition>
    )
}

Drawer.Header = () => {
    const { onClose, title } = useContext(DrawerContext);
    return (
        <div className="flex items-center justify-between h-16 min-h-[4rem] border-b px-4">
            <div className="font-medium muted-text truncate" title={title}>
                {title}
            </div>
            <div className="h-8 w-8 min-w-[2rem] min-h-[2rem] flex items-center justify-center rounded bg-secondary hover:bg-accent cursor-pointer group" onClick={onClose}>
                <TbX size={18} className='text-secondary-foreground group-hover:text-accent-foreground' />
            </div>
        </div>
    )
}
Drawer.Content = ({ children }) => {
    return (
        <div className='py-3 flex flex-col gap-4'>
            {children}
        </div>
    )
}

Drawer.Section = ({ children, title, action }) => {
    return (
        <div className="flex flex-col px-4 gap-2">
            <div className="flex justify-between items-center">
                <div className="font-medium text-muted-foreground text-sm">
                    {title}
                </div>
                {action}
            </div>
            <div className="py-2 px-4 rounded bg-secondary text-sm flex items-center gap-2">
                {children}
            </div>
        </div>
    )
}

Drawer.Footer = ({ children }) => {
    return (
        <div className="flex pt-3 px-4 justify-between items-center border-t">
            {children}
        </div>
    )
}
export default Drawer;
