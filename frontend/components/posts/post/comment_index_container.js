import { connect } from "react-redux"
import CommentIndex from "./CommentIndex"

const mapStateToProps = ({ entities: { posts, users }}) => ({
  posts,
  users,
})

// const mapDispatchToProps = dispatch =>  ({
  
// })

export default connect(mapStateToProps, null)(CommentIndex);