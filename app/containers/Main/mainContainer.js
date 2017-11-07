import React, { Component } from 'react';
import firebase from 'firebase'
import PropTypes from 'prop-types'
import { Navigation } from 'components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { container, innerContainer } from './styles.css';
import { bindActionCreators } from 'redux'
import * as userActionCreators from 'redux/modules/users'
import { formatUserInfo } from 'helpers/utils'
import { firebaseAuth } from 'config/constants'



class MainContainer extends Component {
  constructor(props){
    super(props)

  }
  componentDidMount () {
    firebaseAuth().onAuthStateChanged((user) => {
      if (user){
        const userData = user.providerData[0]
        const userInfo = formatUserInfo(userData.displayName, userData.photoUrl, user.uid)
        this.props.authUser(user.uid)
        this.props.fetchingUserSuccess(user.uid, userInfo, Date.now())
        if ( this.props.location.pathname === '/') {
          this.context.router.replace('feed')
        } else {
          this.props.removeFetchingUser()
        }
      }
    })

  }
  render() {
    console.log('props', this.props)

    return this.props.isFetching === true
      ? null
      :(
        <div className={container}>
          <Navigation isAuthed={this.props.isAuthed}/> 
          <div className={innerContainer}>
            {this.props.children}
          </div>
        </div>
      
    )
  }
}

MainContainer.contextTypes = {
  router: PropTypes.object.isRequired
}


export default withRouter(connect(
  (state) => ({isAuthed: state.isAuthed, isFetching: state.isFetching}),
  (dispatch) => bindActionCreators(userActionCreators, dispatch)
  
)(MainContainer))