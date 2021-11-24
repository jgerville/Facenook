import { connect } from "react-redux";
import { logout } from "../../../actions/session_actions";
import AccountDropDown from "./AccountDropDown";

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default connect(null, mapDispatchToProps)(AccountDropDown);