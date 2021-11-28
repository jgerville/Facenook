import { connect } from "react-redux";
import { logout } from "../../../actions/session_actions";
import { getWallInfo } from "../../../actions/user_actions";
import AccountDropDown from "./AccountDropDown";

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  getUserInfo: (id) => dispatch(getWallInfo(id)),
});

export default connect(null, mapDispatchToProps)(AccountDropDown);