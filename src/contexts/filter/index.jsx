import { createContext } from "react";
import { useImmerReducer } from "use-immer";

import { filter } from "@reducers";
import { filterCreators } from "@actions";

const initialState = {
    selectedDate: new Date()
}
export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
    const [state, dispatch] = useImmerReducer(filter, initialState);

    const selectDate = date => {
        dispatch(filterCreators.setDateRequest(date));
    }
    const clearDate = () => {
        dispatch(filterCreators.clearDateRequest());
    }
    const values = {
        ...state,
        selectDate,
        clearDate
    }
    return (
        <FilterContext.Provider value={values}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterProvider;