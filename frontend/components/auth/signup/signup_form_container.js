import { connect } from "react-redux";
import { closeModal } from "../../../actions/modal_actions";
import { signup } from "../../../actions/session_actions";
import SignupForm from "./SignupForm";

const mapStateToProps = ({ errors }) => ({
  errors: errors.signup,
});

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);