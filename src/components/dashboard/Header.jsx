import Button from '@components/common/Button'
import DatePicker from '@components/common/DatePicker'
import useFilter from '@hooks/useFilter'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import classNames from 'classnames'
import { format } from 'date-fns'
import { CiCalendar } from 'react-icons/ci'

const Header = () => {
    const { selectedDate, selectDate, clearDate } = useFilter();
    return (
        <div className='flex items-center justify-between'>
            <div className="text-3xl font-bold">
                Dashboard
            </div>

            <div className="flex items-center">
                <Popover>
                    <PopoverTrigger asChild>
                        <div className="flex">
                            <Button
                                variant={"outline"}
                                className={classNames(
                                    "justify-start text-left font-medium",
                                    !selectedDate && "text-muted-foreground"
                                )}
                            >
                                <CiCalendar strokeWidth={1} size={18}  />
                                {selectedDate ? format(selectedDate, "PPP") : <span className='font-semibold'>Pick a date</span>}
                            </Button>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <DatePicker
                            className={'border rounded-md'}
                            mode="single"
                            onSelect={selectDate}
                            selected={selectedDate}
                            numberOfMonths={2}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
                {selectedDate && (
                    <Button onClick={clearDate} variant="link">Clear</Button>
                )}
            </div>
        </div>
    )
}

export default Header