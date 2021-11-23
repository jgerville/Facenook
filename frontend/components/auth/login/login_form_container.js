import { connect } from "react-redux";
import { openModal } from "../../../actions/modal_actions";
import { login } from "../../../actions/session_actions";
import LoginForm from "./LoginForm";

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login({ user })),
  openModal: () => dispatch(openModal("signup")),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);