import classNames from 'classnames';
import React, { memo } from 'react'

const Textarea = ({ name, id, value, onChange, type, label, placeholder, className, ...props }) => {
    const handleChange = e => {
        onChange(e.target.name, e.target.value);
    }
    return (
        <div className={classNames(
            'border h-[120px] w-full rounded flex flex-col relative overflow-hidden duration-100 focus-within:border-border-hover group',
            className
        )}>
            <label className='
                text-xs text-muted-foreground
                px-2 pt-1.5
            '
                htmlFor={id}
            >
                {label}
            </label>
            <textarea
                id={id}
                name={name}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className='
                    outline-none border-none mt-2 w-full bg-transparent border-transparent text-xs px-2 h-full muted-text
                    resize-none
                '
                {...props}
            />
        </div>
    )
}

export default memo(Textarea);