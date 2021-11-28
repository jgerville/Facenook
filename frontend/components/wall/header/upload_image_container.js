import { connect } from "react-redux"
import { closeModal, openModal } from "../../../actions/modal_actions"
import { uploadFileToUser } from "../../../actions/user_actions"
import UploadImage from "./UploadImage"

const mapStateToProps = ({ ui }) => ({
  modal: ui.modal,
});

const mapDispatchToProps = (dispatch) => ({
  upload: (user) => dispatch(uploadFileToUser(user)),
  openModal: (modalType) => dispatch(openModal(modalType)),
  closeModal: () => dispatch(closeModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UploadImage);