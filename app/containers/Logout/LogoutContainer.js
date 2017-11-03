import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Logout } from 'components'
import { LogoutAndUnauth } from 'redux/modules/users'

class LogoutContainer extends Component {
constructor(props){
  super(props)

}
componentDidMount(){
  this.props.dispatch(LogoutAndUnauth())
}
  render() {
    return (
      <div>
        <Logout />
      </div>
    );
  }
}



export default connect()(LogoutContainer);