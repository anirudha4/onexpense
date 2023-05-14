import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import classNames from 'classnames';
import { format } from 'date-fns';
import Button from '@components/common/Button';
import DatePicker from '@components/common/DatePicker';
import { CiCalendar } from 'react-icons/ci';
import { useFilter } from '@hooks';
import Dropdown from '@components/common/Dropdown';
const TransactionFilter = () => {
    const { selectedDate, selectDate, clearDate } = useFilter();
    return (
        <div className="flex items-center">
            <Dropdown
                trigger={(
                    <div className="flex">
                        <Button
                            variant={"outline"}
                            className={classNames(
                                "justify-start text-left font-medium",
                                !selectedDate && "text-muted-foreground"
                            )}
                        >
                            <CiCalendar strokeWidth={1} size={18} />
                            {selectedDate ? format(selectedDate, "PPP") : <span className='font-semibold'>Filter by date</span>}
                        </Button>
                    </div>
                )}
                closeOnSelfClick={false}
            >
                <DatePicker />
            </Dropdown>
            {(selectedDate && selectedDate === new Date()) && (
                <Button onClick={clearDate} variant="link">Reset</Button>
            )}
        </div>
    )
}

export default TransactionFilter