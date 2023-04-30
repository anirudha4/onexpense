import { createActions } from "reduxsauce";

export const { Types: authTypes, Creators: authCreators } = createActions({
    // google login
    authRequest: [],
    authSuccess: [''],
    authError: ['error'],
    authLogout: [],
});