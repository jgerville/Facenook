import { connect } from "react-redux"
import { closeModal, openModal } from "../../../actions/modal_actions"
import { deletePost } from "../../../actions/post_actions"
import EditAndDeleteButtons from "./EditAndDeleteButtons"


const mapStateToProps = ({ ui: { modal }, session }) => ({
  modal,
  currentUserId: session.id,
})

const mapDispatchToProps = (dispatch) => ({
  deletePost: (id) => dispatch(deletePost(id)),
  startEditing: () => dispatch(openModal("compose-post")),
  closeModal: () => dispatch(closeModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditAndDeleteButtons);