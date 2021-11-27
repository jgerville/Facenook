import { connect } from "react-redux"
import { editUserInfo } from "../../../../../actions/user_actions";
import SchoolsInput from "./education/SchoolsInput";
import HometownInput from "./hometown/HometownInput";
import JobsInput from "./jobs/JobsInput"
import RelationshipStatusInput from "./relationship/RelationshipStatusInput";

// const mapStateToProps = ({}) => ({
  
// });

const mapDispatchToProps = dispatch => ({
  editInfo: (user) => dispatch(editUserInfo(user))
});

export const JobsInputContainer = connect(null, mapDispatchToProps)(JobsInput);
export const SchoolsInputContainer = connect(null, mapDispatchToProps)(SchoolsInput);
export const HometownInputContainer = connect(null, mapDispatchToProps)(HometownInput);
export const RelationshipStatusInputContainer = connect(null, mapDispatchToProps)(RelationshipStatusInput);