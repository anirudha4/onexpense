import classNames from 'classnames';
import React from 'react';

const SegmentedControl = ({ options, onChange, value, name }) => {
    const handleOptionChange = (option) => {
        console.log({ name, option });
        onChange(name, option);
    };
    return (
        <div className='flex items-center gap-2 h-10 p-1 rounded bg-background border'>
            {options.map((option, index) => (
                <SegmentedControlItem
                    key={index}
                    option={option}
                    isSelected={value === option}
                    onChange={handleOptionChange}
                />
            ))}
        </div>
    );
};

const SegmentedControlItem = ({ option, isSelected, onChange }) => {
    const handleChange = () => {
        onChange(option);
    };

    return (
        <div
            tabIndex={0}
            onFocus={handleChange}
            onClick={handleChange}
            className={classNames(
                'rounded cursor-pointer text-xs muted-text w-full h-full',
                'flex items-center justify-center outline-none',
                'text-center duration-100 hover:bg-secondary hover:text-secondary-foreground',
                'focus:bg-accent',
                { 'bg-secondary': isSelected }
            )}
        >
            {option}
        </div>
    );
};

export default SegmentedControl;
