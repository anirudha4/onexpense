import { RadioGroup } from '@headlessui/react';
import classNames from 'classnames';
import React from 'react';
import { TbCheck } from 'react-icons/tb';

const SegmentedControl = ({ options, onChange, value, name }) => {
    const handleOptionChange = (option) => {
        onChange(name, option)
    };
    return (
        <RadioGroup value={value} onChange={handleOptionChange}>
            <div className="flex items-center gap-1 border border-secondary p-1 rounded">
                {options.map((option) => (
                    <RadioGroup.Option
                        key={option}
                        value={option}
                        className={({ checked }) =>
                            classNames(
                                'outline-none p-1 flex-1 text-center rounded text-sm py-2',
                                'font-medium text-secondary-foreground cursor-pointer',
                                'hover:bg-secondary',
                                {
                                    'bg-secondary': checked,
                                }
                            )
                        }
                    >
                        {option}
                    </RadioGroup.Option>
                ))}
            </div>
        </RadioGroup>
    )
}

export default SegmentedControl;