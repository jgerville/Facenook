import { connect } from "react-redux";
import { createPost } from "../../../actions/post_actions";
import ComposeComment from "./ComposeComment";

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id],
});

const mapDispatchToProps = (dispatch) => ({
  createPost: (post) => dispatch(createPost(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ComposeComment);