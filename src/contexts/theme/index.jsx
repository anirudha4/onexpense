import classNames from 'classnames';
import React, { createContext, useState } from 'react'

export const ThemeContext = createContext({
    theme: 'light'
});

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if(theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }
    return (
        <div className={classNames('bg-background text-foreground', {
            'dark': theme === 'dark',
        })}>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                {children}
            </ThemeContext.Provider>
        </div>
    )
}

export default ThemeProvider