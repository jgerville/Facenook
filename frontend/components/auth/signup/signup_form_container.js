import { connect } from "react-redux";
import { closeModal } from "../../../actions/modal_actions";
import { clearSignupErrors, signup } from "../../../actions/session_actions";
import SignupForm from "./SignupForm";

const mapStateToProps = ({ errors }) => ({
  errors: errors.signup,
});

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearSignupErrors()),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);