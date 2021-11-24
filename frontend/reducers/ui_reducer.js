import { combineReducers } from "redux";
import dropdownReducer from "./ui/dropdown_reducer";
import modalReducer from "./ui/modal_reducer";

const uiReducer = combineReducers({
  modal: modalReducer,
  dropdown: dropdownReducer,
});

export default uiReducer;