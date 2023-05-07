import { userTypes } from "@actions";

/**
 * @param {object} draft
 * @param {object} draft.user
 * @param {string} draft.user.name
 * @param {string} draft.user.email
 * @param {boolean} draft.user.isVerified,
 * @param {string} draft.user.userId
 * @param {string} draft.user.photoURL
 * 
 * @param {string} draft.error
 * 
 * @param {boolean} draft.isLoading
 * 
 */

export default (draft, action) => {
    switch (action.type) {
        case userTypes.USER_REQUEST:
            draft.isLoading = true;
            break;
        case userTypes.USER_SUCCESS:
            draft.isLoading = false;
            draft.user = action.user;
            break;
        case userTypes.USER_ERROR:
            draft.isLoading = false;
            draft.error = action.error;
            draft.user = null;
            break;
        case userTypes.USER_NOT_FOUND:
            draft.isLoading = false;
            break;
        default:
            break;
    }
}