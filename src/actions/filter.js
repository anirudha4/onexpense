import { createActions } from "reduxsauce";

export const { Types: filterTypes, Creators: filterCreators }  = createActions({
    setDateRequest: ['date'],
    clearDateRequest: []
})