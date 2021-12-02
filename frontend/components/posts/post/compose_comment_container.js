import { connect } from "react-redux";
import { createPost, getPost } from "../../../actions/post_actions";
import ComposeComment from "./ComposeComment";

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id],
  formType: "create",
});

const mapDispatchToProps = (dispatch) => ({
  postAction: (post) => dispatch(createPost(post)),
  getPost: (postId) => dispatch(getPost(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ComposeComment);