const mapStateToProps = ({session, {entities: {users}}}, ownProps) => ({
  currentUser: users[session.id],
  wallOwner: users[ownProps.match.params.userId],
  // add something for friends? or instead, update users slice once mounted
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  
})
