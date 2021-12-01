import { openModal } from "../../../actions/modal_actions"

const mapStateToProps = ({ ui }) => ({
  modal: ui.modal,
})

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal("compose-post")),
})

)