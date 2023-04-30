import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom';

export const POSITIONS = {
    BOTTOM_RIGHT: 'bottom-right',
    BOTTOM_LEFT: 'bottom-left',
    TOP_RIGHT: 'top-right',
    TOP_LEFT: 'top-left'
}

const Popup = ({ trigger, children, position = 'bottom-right' }) => {
    const [open, setOpen] = useState(false);
    const [bounds, setBounds] = useState({
        top: 0,
        left: 0
    });
    const triggerRef = useRef();
    const childrenRef = useRef();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleRepositionOptionsMenu = () => {
        const triggerRect = triggerRef.current.getBoundingClientRect();
        let top = 0;
        let left = 0;
        switch (position) {
            case 'top-left':
                top = triggerRect.top - childrenRef.current.offsetHeight;
                left = triggerRect.left;
                break;
            case 'top-right':
                top = triggerRect.top - childrenRef.current.offsetHeight;
                left = triggerRect.left + triggerRect.width - childrenRef.current.offsetWidth;
                break;
            case 'bottom-left':
                top = (triggerRect.top + 10) + triggerRect.height;
                left = triggerRect.left;
                break;
            case 'bottom-right':
                top = (triggerRect.top + 10) + triggerRect.height;
                left = triggerRect.left + triggerRect.width - childrenRef.current.offsetWidth;
                break;
            default:
                break;
        }
        setBounds({
            top,
            left
        })
    }

    // effects
    useEffect(() => {
        if (open && childrenRef.current) {
            handleRepositionOptionsMenu();
        }
    }, [open, childrenRef.current])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (childrenRef.current && !childrenRef.current.contains(event.target)) {
                handleClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <>
            {React.cloneElement(trigger, {
                ref: triggerRef,
                onClick: handleOpen
            })}

            {open && (
                ReactDOM.createPortal(
                    <div
                        className='fixed z-50 overflow-hidden border rounded-md'
                        style={{
                            top: bounds.top,
                            left: bounds.left,
                        }}
                        ref={childrenRef}
                    >
                        {React.cloneElement(children, {
                            onClose: handleClose
                        })}
                    </div >
                    , document.body)
            )}
        </>
    )
}

export default Popup