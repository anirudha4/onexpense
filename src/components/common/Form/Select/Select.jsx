import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import classNames from 'classnames'
import { TbCheck, TbSelector } from 'react-icons/tb'

export default function Select({
    options,
    onChange,
    value,
    label,
    placeholder = 'Select',
    name
}) {
    const handleChange = (value) => {
        onChange(name, value)
    }
    return (
        <Listbox value={value} onChange={handleChange}>
            <div className="relative mt-1">
                <Listbox.Button
                    className={classNames(
                        "border h-[50px] w-full rounded flex flex-col relative outline-none",
                        "overflow-hidden duration-100 focus-within:border-border-hover group text-left"
                    )}
                >
                    {({ value }) => (
                        <div className="flex flex-col w-full h-full relative">
                            <label className='text-xs text-muted-foreground px-2 pt-1'>
                                {label}
                            </label>
                            <div className="flex justify-between w-full mt-[2px] pr-3 h-full items-center">
                                <div className={classNames(
                                    "outline-none border-none w-full bg-transparent border-transparent text-xs px-2 muted-text",
                                    { 'text-muted-foreground': !value.label }
                                )}>
                                    {value.label || placeholder}
                                </div>
                                <TbSelector
                                    size={16}
                                    aria-hidden="true"
                                    className='absolute right-2 top-[50%] translate-y-[-50%]'
                                />
                            </div>
                        </div>
                    )}
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    enter="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className={classNames(
                        'absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-background',
                        'border focus:outline-none'
                    )}>
                        {options.map((option) => (
                            <Listbox.Option
                                key={option.id}
                                className={({ active }) =>
                                    classNames(
                                        `relative cursor-default select-none px-4 h-10 py-1 flex items-center justify-between gap-2`,
                                        { 'bg-accent text-accent-foreground': active },
                                    )
                                }
                                value={option}
                            >
                                {({ selected }) => (
                                    <>
                                        <span className='text-xs'>
                                        {option.label}
                                        </span>
                                        {selected && (
                                            <span className="flex items-center">
                                                <TbCheck aria-hidden="true" />
                                            </span>
                                        )}
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div >
        </Listbox >
    )
}
