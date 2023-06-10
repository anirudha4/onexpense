
import { Menu, Transition } from '@headlessui/react'
import classNames from 'classnames'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function Dropdown({ options, trigger, width = 200 }) {
    return (
        <Menu as="div" className="relative h-10">
            <Menu.Button>
                {trigger}
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    style={{ width }}
                    className={classNames(
                        "absolute right-0 top-[110%] origin-top-right rounded bg-background shadow-lg focus:outline-none",
                        "border"
                    )}
                >
                    <div className="px-1 py-1 flex flex-col">
                        {options.map(option => (
                            <Menu.Item as={option.as ?? Link} to={option.route} onClick={option.handler} key={option.id}>
                                {({ active }) => (
                                    <div className={classNames(
                                        'py-1 px-3 h-8 text-sm rounded flex items-center gap-2',
                                        'hover:bg-accent hover:text-accent-foreground',
                                        { 'bg-accent text-accent-foreground': active }
                                    )}>
                                        {option.icon && option.icon}
                                        {option.label}
                                    </div>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}