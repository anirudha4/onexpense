import classNames from 'classnames';
import React, { useState, useEffect, useRef, createContext, useContext, memo, useMemo } from 'react';
import { cva } from 'class-variance-authority';
import Input from './Input';
import { TbCheck } from 'react-icons/tb';

const Context = createContext();

const Select = ({
    width,
    closeOnSelfClick = true,
    name,
    id,
    value,
    onChange,
    label,
    placeholder,
    children
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef();

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            handleClose();
        }
    };

    const handleClose = () => setIsOpen(false);
    // const handleOpen = () => setIsOpen(true);
    const toggleSelect = () => setIsOpen(!isOpen);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                handleClose();
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [selectRef]);


    return (
        <Context.Provider value={{ onChange, value, name }}>
            <div className="relative w-full cursor-pointer" ref={selectRef} style={{ width }}>
                <Input
                    readOnly
                    value={value.label}
                    placeholder={placeholder}
                    label={label}
                    name={name}
                    id={id}
                    onClick={toggleSelect}
                    // onFocus={handleOpen}
                    // onBlur={handleClose}
                />
                {isOpen && (
                    <ul
                        onClick={() => closeOnSelfClick && handleClose()}
                        className={classNames(
                            "absolute p-[4px] top-14 right-0 bg-background rounded-md border flex flex-col gap-1 w-full z-20",
                            "max-h-[220px] overflow-auto"
                        )}
                    >
                        {children}
                    </ul>
                )}
            </div>
        </Context.Provider>
    );
};

export const selectOptionVariants = cva(
    "inline-flex items-center justify-between gap-2 rounded text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed w-full cursor-pointer",
    {
        variants: {
            variant: {
                default: "hover:text-primary hover:bg-primary-foreground",
                destructive:
                    "text-destructive hover:bg-destructive-foreground",
                outline:
                    "border border-input hover:bg-secondary hover:text-secondary-foreground",
                secondary:
                    "hover:text-secondary-foreground hover:bg-secondary",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "underline-offset-4 hover:underline text-primary",
            },
            size: {
                default: "h-8 p-2",
                sm: "h-9 px-3 rounded-md",
                lg: "h-11 px-8 rounded-md",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export const SelectOption = ({
    children,
    className,
    option,
    size = 'default',
    variant = 'secondary',
}) => {
    const { onChange, value, name } = useContext(Context);
    const handleChange = () => onChange(name, option);
    const isOptionSelected = useMemo(() => option.id === value.id, [option, value]);
    return (
        <li
            className={classNames(
                selectOptionVariants({ size, variant, className }),
                {
                    'bg-secondary': isOptionSelected
                })}
            onClick={handleChange}
        >
            <span className='flex-1 truncate'>{children}</span>
            {isOptionSelected && <TbCheck size={16} />}
        </li>
    );
};

const SelectLabel = ({
    children
}) => {
    return <span className='px-2 text-muted-foreground text-xs'>{children}</span>
}

Select.Option = SelectOption;
Select.Label = SelectLabel;

export default memo(Select);
