import { CLOSE_DROPDOWN, OPEN_DROPDOWN } from "../../actions/dropdown_actions";

const dropdownReducer = (state = null, action) => {
  Object.freeze(state);

  switch (action.type) {
    case OPEN_DROPDOWN:
      return action.component;
    case CLOSE_DROPDOWN:
      return null;
    default:
      return state;
  }
};

export default dropdownReducer;