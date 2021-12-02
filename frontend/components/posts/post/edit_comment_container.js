import { connect } from "react-redux";
import { editPost, getPost } from "../../../actions/post_actions";
import EditComment from "./EditComment";

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id],
  formType: "edit"
});

const mapDispatchToProps = (dispatch) => ({
  postAction: (post) => dispatch(editPost(post)),
  getPost: (postId) => dispatch(getPost(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditComment);