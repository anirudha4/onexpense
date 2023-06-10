import React, { forwardRef } from 'react'
import Input from './Input'
import classNames from 'classnames';
import Select from './Select/Select';
import Textarea from './Textarea';

const Form = forwardRef(({ children, onSubmit, width, className, ...props }, ref) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit && onSubmit(e);
    }
    return (
        <form ref={ref} onSubmit={handleSubmit} className={classNames(className, 'flex flex-col gap-3')} style={{ maxWidth: width, width: '100%' }} {...props }>
            {children}
        </form>
    )
});

Form.Input = Input;
Form.Select = Select;
Form.Textarea = Textarea;
export default Form;
