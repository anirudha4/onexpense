import { ThemeContext } from '@contexts/theme'
import React, { useContext } from 'react'

const useTheme = () => useContext(ThemeContext);
export default useTheme