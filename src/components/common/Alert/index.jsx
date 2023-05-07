import React from 'react'
import { BiInfoCircle } from 'react-icons/bi';
import { cva } from 'class-variance-authority'
import classNames from 'classnames';

const alertVariants = cva(
    "relative h-10 w-full rounded-md flex items-center gap-3 px-4 muted-text text-sm font-medium",
    {
        variants: {
            variant: {
                default: "text-accent",
                destructive:
                    "bg-destructive-foreground dark:border-destructive text-destructive",
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
    icon = <BiInfoCircle size={20} />,
    props
}) => {
    return (
        <div
            role="alert"
            className={classNames(alertVariants({ variant }), className)}
            {...props}
        >
            {React.cloneElement(icon, {
                size: 20
            })}
            {text}
        </div>
    )
}

export default Alert