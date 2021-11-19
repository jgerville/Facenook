import { connect } from "react-redux"

const mapStateToProps = ({session, entities: {users}}) => ({
  currentUser: users[session.id]
})

const mapDispatchToProps = {
  logout: () => dispatch(logout())
}

export default connect(mapStateToProps, mapDispatchToProps)()