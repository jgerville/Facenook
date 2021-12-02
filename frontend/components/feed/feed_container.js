import { connect } from "react-redux"
import Feed from "./Feed"

const mapStateToProps = ({ entities: { users }, session }) => ({
  currentUser: users[session.id]
})

export default connect(mapStateToProps, null)(Feed);