import { connect } from "react-redux"
import { closeModal } from "../../../actions/modal_actions"
import { uploadFileToUser } from "../../../actions/user_actions"
import UploadAvatar from "./UploadAvatar"

const mapDispatchToProps = (dispatch) => ({
  upload: (user) => dispatch(uploadFileToUser(user)),
  closeModal: () => dispatch(closeModal()),
})

export default connect(null, mapDispatchToProps)(UploadAvatar)