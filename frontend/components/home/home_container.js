import { connect } from "react-redux";
import { login, logout, signup } from "../../actions/session_actions";
import Home from "./Home";

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id],
});

const mapDispatchToProps = {
  login: () => dispatch(login()),
  logout: () => dispatch(logout()),
  signup: () => dispatch(signup()),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);