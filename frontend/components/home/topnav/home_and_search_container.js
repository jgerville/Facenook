import { connect } from "react-redux"
import { search } from "../../../actions/user_actions"
import HomeAndSearch from "./HomeAndSearch"

const mapStateToProps = ({ entities: { searchResults }}) => ({
  searchResults,
})

const mapDispatchToProps = (dispatch) => ({
  search: (query) => dispatch(search(query)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeAndSearch);