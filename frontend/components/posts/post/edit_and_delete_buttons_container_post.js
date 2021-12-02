import { connect } from "react-redux"
import { closeModal, openModal } from "../../../actions/modal_actions"
import { deletePost, editPost } from "../../../actions/post_actions"
import EditAndDeleteButtons from "./EditAndDeleteButtons"


const mapStateToProps = ({ ui: { modal }, session, entities: { users } }) => ({
  modal,
  currentUser: users[session.id],
  users,
})

const mapDispatchToProps = (dispatch) => ({
  editPost: (post) => dispatch(editPost(post)),
  deletePost: (id) => dispatch(deletePost(id)),
  startEditing: (string) => dispatch(openModal(string)),
  closeModal: () => dispatch(closeModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditAndDeleteButtons);