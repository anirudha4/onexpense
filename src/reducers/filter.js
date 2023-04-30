import { filterTypes } from "@actions";

export default (draft, action) => {
    switch (action.type) {
        case filterTypes.SET_DATE_REQUEST:
            draft.selectedDate = action.date;
            break;
        case filterTypes.CLEAR_DATE_REQUEST:
            draft.selectedDate = null;
            break;
        default:
            break;
    }
}