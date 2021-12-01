import { connect } from "react-redux"
import { closeModal, openModal } from "../../../actions/modal_actions"
import CreatePost from "./CreatePost"

const mapStateToProps = ({ ui }) => ({
  modal: ui.modal,
})

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal("compose-post")),
  closeModal: () => dispatch(closeModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)