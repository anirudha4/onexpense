import React from 'react'
import Input from './Input'
import classNames from 'classnames';

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

export default Form

Form.Input = Input;