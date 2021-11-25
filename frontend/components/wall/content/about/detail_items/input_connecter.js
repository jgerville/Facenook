import { connect } from "react-redux"
import { editUserInfo } from "../../../../../actions/user_actions";
import HometownInput from "./hometown/HometownInput";
import JobsInput from "./jobs/JobsInput"

// const mapStateToProps = ({}) => ({
  
// });

const mapDispatchToProps = dispatch => ({
  editInfo: (user) => dispatch(editUserInfo(user))
});

export const JobsInputContainer = connect(null, mapDispatchToProps)(JobsInput);

export const HometownInputContainer = connect(null, mapDispatchToProps)(HometownInput);