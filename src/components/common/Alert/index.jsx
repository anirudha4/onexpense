import React from 'react'
import { BiInfoCircle } from 'react-icons/bi';
import { cva } from 'class-variance-authority'
import classNames from 'classnames';

const alertVariants = cva(
    "relative w-full rounded flex items-center gap-3",
    {
        variants: {
            variant: {
                default: "text-accent",
                destructive:
                    "text-destructive-foreground border-destructive/50 dark:border-destructive text-destructive",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

const Alert = ({
    className,
    variant,
    text,
    icon = <BiInfoCircle />,
    props
}) => {
    return (
        <div
            role="alert"
            className={classNames(alertVariants({ variant }), className, 'muted-text text-sm')}
            {...props}
        >
            {icon}
            {text}
        </div>
    )
}

export default Alert