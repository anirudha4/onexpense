import { useContext } from 'react'
import { FilterContext } from '@contexts/filter'

const useFilter = () => useContext(FilterContext);

export default useFilter