import React from 'react'
import Input from './Input'
import classNames from 'classnames';
import Select from './Select';

const Form = ({ children, onSubmit, width, className }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit && onSubmit(e);
    }
    return (
        <form onSubmit={handleSubmit} className={classNames(className, 'flex flex-col gap-3')} style={{ maxWidth: width, width: '100%' }}>
            {children}
        </form>
    )
}

Form.Input = Input;
Form.Select = Select;
export default Form
