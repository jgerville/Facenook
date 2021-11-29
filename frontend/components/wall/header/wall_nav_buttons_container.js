import { connect } from "react-redux";
import {
  acceptFriendRequest,
  getRelatedFriendreqs,
  sendFriendRequest,
  unfriend,
} from "../../../actions/friendreq_actions";
import { withRouter } from "../../../util/RouterUtil";
import WallNavButtons from "./WallNavButtons";

const mapStateToProps = ({ session, entities: { users, friendreqs } }, ownProps) => ({
  currentUser: users[session.id],
  wallOwner: users[ownProps.params.userId],
  isMine: session.id === parseInt(ownProps.params.userId),
  friendreqs,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  sendFriendRequest: (friendreq) => dispatch(sendFriendRequest(friendreq)),
  acceptFriendRequest: (friendreq) => dispatch(acceptFriendRequest(friendreq)),
  unfriend: (friendreqId) => dispatch(unfriend(friendreqId)),
  getRelatedFriendReqs: (wallOwnerId) =>
    dispatch(getRelatedFriendreqs(wallOwnerId)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(WallNavButtons)
);