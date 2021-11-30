import { connect } from "react-redux"
import { search, updateCancelToken } from "../../../actions/user_actions"
import HomeAndSearch from "./HomeAndSearch"

const mapStateToProps = ({ entities: { searchResults, users }, session, cancelToken }) => ({
  searchResults,
  friendIds: users[session.id].friends,
  cancelToken,
})

const mapDispatchToProps = (dispatch) => ({
  search: (query, source) => dispatch(search(query, source)),
  updateCancelToken: (token) => dispatch(updateCancelToken(token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeAndSearch);