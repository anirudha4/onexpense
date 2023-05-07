import { createActions } from "reduxsauce";

export const { Types: userTypes, Creators: userCreators } = createActions({
    userRequest: [],
    userSuccess: ['user'],
    userError: ['error'],
    userNotFound: ['']
})