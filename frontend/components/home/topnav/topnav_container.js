import { connect } from "react-redux";
import { closeDropdown, openDropdown } from "../../../actions/dropdown_actions";
import TopNav from "./TopNav";

const mapStateToProps = ({ ui: { dropdown } }) => ({
  dropdown,
});

const mapDispatchToProps = (dispatch) => ({
  openDropdown: (component) => dispatch(openDropdown(component)),
  closeDropdown: () => dispatch(closeDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);