import { GET_ALL_USERLIST } from "../actions/types";
const initialState = {
    userList: {}
}
const moveListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USERLIST:
            return {
                ...state,
                userList: action.payload,
            };
        default:
            return state
    }
}
export default moveListReducer;