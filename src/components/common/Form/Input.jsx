import classNames from 'classnames';
import React, { memo } from 'react'

const Input = ({ name, id, value, onChange, type, label, placeholder, className, ...props }) => {
    const handleChange = e => {
        onChange(e.target.name, e.target.value);
    }
    return (
        <div className={classNames(
            'border h-[50px] w-full rounded flex flex-col relative overflow-hidden duration-100 focus-within:border-border-hover group',
            className
        )}>
            <label className='
                text-xs text-muted-foreground
                px-2 pt-1
            '
                htmlFor={id}
            >
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className='
                    outline-none border-none mt-[2px] w-full bg-transparent border-transparent text-xs px-2 h-full muted-text
                '
                {...props}
            />
        </div>
    )
}

export default memo(Input);