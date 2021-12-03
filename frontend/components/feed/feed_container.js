import { connect } from "react-redux";
import { getWallInfo } from "../../actions/user_actions";
import Feed from "./Feed";

const mapStateToProps = ({ entities: { users }, session }) => ({
  currentUser: users[session.id],
  users,
});

const mapDispatchToProps = (dispatch) => ({
  getUserInfo: (userId) => dispatch(getWallInfo(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);