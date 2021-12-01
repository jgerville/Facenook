// this container is separate from the post_index_container_home one
// these two containers map different methods of fetching posts
// depending on whether the index is on someone else's wall, or on the home page
// that way, PostIndex can be a "dumber" component

import { connect } from "react-redux";
import { getPostsByWall } from "../../../actions/post_actions";
import { withRouter } from "../../../util/RouterUtil";
import PostIndex from "./PostIndex";

const mapStateToProps = ({ entities: { posts, users }, session: { id } }) => ({
  posts,
  users,
  currentUser: users[id],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getPosts: () => dispatch(getPostsByWall(parseInt(ownProps.params.userId))),
  // getUsers: () => dispatch()
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostIndex)
);