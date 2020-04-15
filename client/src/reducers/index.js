import { combineReducers } from "redux";
import userList from "./userListReducer";
export default combineReducers({
    userList: userList
});


