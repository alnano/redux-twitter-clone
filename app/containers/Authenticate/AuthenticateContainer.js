import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Authenticate } from 'components'
import auth from 'helpers/auth'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActionCreators from 'redux/modules/users'

class AuthenticateContainer extends Component {
  constructor(props){
    super(props)

    this.handleAuth = this.handleAuth.bind(this)
  }

  handleAuth(e) {

    e.preventDefault()
    console.log('this.props', this.props)
    this.props.fetchAndhandleAuthedUser()
      .then(() => this.props.history.push("/feed"))
    // .then(()=> this.context.router.history.repalce('feed'))
    //   this.props.fetchingUser()
    // auth().then((user) =>{
    //   this.props.fetchingUserSuccess(user.uid, user, Date.now())
    //   this.props.authUser(user.uid)
      
    // })
    // .catch((error) => this.props.fetchingUserFailure(error))
  }

  render() {
    return (
      <div>
        
      <Authenticate 
        isFetching={this.props.isFetching}
        error={this.props.error}
        onAuth={this.handleAuth}/> 
      </div>
    );
  }
}

AuthenticateContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

function mapStateToProps (state){
  console.log('state',state)
  return{
    isFetching: state.isFetching,
    error: state.error
  }
}

function mapDispatchToProps (dispatch){

  return bindActionCreators(userActionCreators, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateContainer);