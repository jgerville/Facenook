// this container is separate from the post_index_container_newsfeed one
// these two containers map different methods of fetching posts
// depending on whether the index is on someone else's wall, or on the newsfeed
// that way, PostIndex can be a "dumber" component

import { connect } from "react-redux";
import { clearPosts, getPostsByWall } from "../../../actions/post_actions";
import { getSomeUsers } from "../../../actions/user_actions";
import { withRouter } from "../../../util/RouterUtil";
import PostIndex from "./PostIndex";

const mapStateToProps = ({ entities: { posts, users }, session: { id } }) => ({
  posts,
  users,
  currentUser: users[id],
  type: "wall",
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getPosts: () => dispatch(getPostsByWall(parseInt(ownProps.params.userId))),
  getUsers: (ids) => dispatch(getSomeUsers(ids)),
  clearPosts: () => dispatch(clearPosts()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostIndex)
);