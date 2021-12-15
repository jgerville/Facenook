import { connect } from "react-redux"
import CommentIndex from "./CommentIndex"

const mapStateToProps = ({ entities: { posts, users }}) => ({
  posts,
  users,
})

export default connect(mapStateToProps, null)(CommentIndex);