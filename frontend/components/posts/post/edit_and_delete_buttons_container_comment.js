import { connect } from "react-redux";
import { deletePost } from "../../../actions/post_actions";
import EditAndDeleteButtons from "./EditAndDeleteButtons";

const mapStateToProps = ({ session }) => ({
  currentUserId: session.id,
})

const mapDispatchToProps = (dispatch) => ({
  deletePost: (id) => dispatch(deletePost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditAndDeleteButtons);