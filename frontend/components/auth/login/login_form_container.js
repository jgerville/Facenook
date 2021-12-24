import { connect } from "react-redux";
import { openModal } from "../../../actions/modal_actions";
import { clearLoginErrors, login } from "../../../actions/session_actions";
import LoginForm from "./LoginForm";

const mapStateToProps = ({ errors }) => ({
  errors: errors.login,
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login({ user })),
  clearErrors: () => dispatch(clearLoginErrors()),
  openModal: () => dispatch(openModal("signup")),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);