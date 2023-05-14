import classNames from 'classnames';
import React, { useState, useEffect, useRef } from 'react';
import { cva } from 'class-variance-authority';

const Dropdown = ({ children, trigger, width = 200, closeOnSelfClick = true }) => {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef();
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            handleClose();
        }
    };

    const handleClose = () => setIsOpen(false);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                handleClose();
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [dropdownRef]);


    return (
        <div className="relative" ref={dropdownRef}>
            {React.cloneElement(trigger, {
                onClick: () => setIsOpen(!isOpen)
            })}
            {isOpen && (
                <ul
                    onClick={() => closeOnSelfClick && handleClose()}
                    className={classNames(
                        "absolute p-[4px] top-12 right-0 bg-background rounded-md border flex flex-col gap-1"
                    )}
                    style={{ width }}
                >
                    {children}
                </ul>
            )}
        </div>
    );
};

export const menuItemVariante = cva(
    "inline-flex items-center  gap-2 rounded text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed w-full cursor-pointer",
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

const MenuItem = ({
    children,
    className,
    onClick = null,
    size = 'default',
    variant = 'secondary',
}) => {
    return <li onClick={onClick} className={classNames(menuItemVariante({ size, variant, className }))}>
        {children}
    </li>;
};

const MenuLabel = ({
    children
}) => {
    return <span className='px-2 text-muted-foreground text-xs'>{children}</span>
}

Dropdown.Item = MenuItem;
Dropdown.Label = MenuLabel;



export default Dropdown;
