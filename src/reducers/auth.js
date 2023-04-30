import { authTypes } from "@actions";
import { mapAuthCodeToMessage } from "@lib/firebase-auth-errors";

/**
 * @param {object} draft
 * @param {object} draft.user
 * @param {boolean} draft.isLoading
 * @param {boolean} draft.isLoggingIn
 * @param {boolean} draft.isLoggedIn
 * @param {string} draft.error
 */
export default (draft, action) => {
    switch (action.type) {
        case authTypes.AUTH_REQUEST:
            draft.isLoggingIn = true;
            break;
        case authTypes.AUTH_SUCCESS:
            draft.isLoggingIn = false;
            draft.isLoggedIn = true;
            break;
        case authTypes.AUTH_ERROR:
            draft.isLoading = false;
            draft.isLoggedIn = false;
            draft.isLoggingIn = false;
            draft.user = null;
            draft.error = mapAuthCodeToMessage(action.error)
            break;
        case authTypes.AUTH_LOGOUT:
            draft.isLoggedIn = false;
            break;
        default:
            break;
    }
}