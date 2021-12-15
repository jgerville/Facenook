import { connect } from "react-redux";
import { login, logout, signup } from "../../actions/session_actions";
import Home from "./Home";

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id],
});

export default connect(mapStateToProps, null)(Home);