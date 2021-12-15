import { connect } from "react-redux";
import { getWallInfo } from "../../actions/user_actions";
import { withRouter } from "../../util/RouterUtil";
import Wall from "./Wall";

const mapStateToProps = ({ session, entities: { users }, ui }, ownProps) => ({
  currentUser: users[session.id],
  wallOwner: users[ownProps.params.userId],
  isMine: session.id === parseInt(ownProps.params.userId),
  modal: ui.modal,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getWallInfo: () => dispatch(getWallInfo(ownProps.params.userId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Wall));