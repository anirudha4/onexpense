import React from 'react'

const Input = ({ name, id, value, onChange, type, label, placeholder }) => {
    const handleChange = e => {
        onChange(e.target.name, e.target.value);
    }
    return (
        <div className='
            border h-[50px] w-full rounded
            flex flex-col
            relative overflow-hidden
            duration-100 focus-within:border-border-hover
            group
        '>
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
                    outline-none border-none mt-[2px] w-full bg-transparent border-transparent text-sm px-2 h-full
                '
            />
        </div>
    )
}

export default Input