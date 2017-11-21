import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { User } from 'components'
import { bindActionCreators } from 'redux'
import * as usersActionCreators from 'redux/modules/users'
import * as usersDucksActionCreators from 'redux/modules/usersDucks'
import { staleUsers, staleDucks } from 'helpers/utils'

class UserContainer extends Component {
  constructor(props){
    super(props)

  } 
  componentDidMount () {
    console.log(this.props,'gggg')
    const uid = this.props.match.params.uid
    if (this.props.noUser === true || staleUsers(this.props.lastUpdatedUser)) {
      this.props.fetchAndHandleUser(uid)
    }

    if(this.props.noUser === true || staleDucks(this.props.lastUpdatedDucks)) {
      this.props.fetchAndHandleUsersDucks(uid)
    }    
  } 
  render() {
    return (
       <User 
        noUser={this.props.noUser}
        name={this.props.name}
        isFetching={this.props.isFetching}
        error={this.props.error}
        duckIds={this.props.duckIds}/>
    );
  }
}

UserContainer.propTypes = {
  noUser: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  duckIds: PropTypes.array.isRequired,

};

function mapStateToProps ({users, usersDucks}, props) {
  //console.log(usersDucks)
  console.log('props', props)
  console.log(users, 'users')
  const specificUsersDucks = usersDucks[props.match.params.uid]
  const user = users[props.match.params.uid]
  const noUser = typeof user === 'undefined'
  return {
    noUser,
    name: noUser ? '' : user.info.name,
    isFetching: users.isFetching || usersDucks.isFetching,
    error: users.error || usersDucks.error,
    duckIds: specificUsersDucks ? specificUsersDucks.duckIds : [],
    lastUpdatedUser: user ? user.lastUpdatedUser: 0,
    lastUpdatedDucks: specificUsersDucks ? specificUsersDucks.lastUpdatedDucks: 0
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators ({
    ...usersActionCreators,
    ...usersDucksActionCreators
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserContainer);