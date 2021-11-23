import { connect } from "react-redux";
import { getWallInfo } from "../../actions/user_actions";
import { withRouter } from "../../util/RouterUtil";
import Wall from "./Wall";

const mapStateToProps = ({ session, entities: { users } }, ownProps) => ({
  currentUser: users[session.id],
  wallOwner: users[ownProps.params.userId],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getWallInfo: () => dispatch(getWallInfo(ownProps.params.userId)),
  // fetchPosts,
  // maybe both are not needed?
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Wall));