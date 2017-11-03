import React, { Component } from 'react';
import { Navigation } from 'components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { container, innerContainer } from './styles.css';

class MainContainer extends Component {
  constructor(props){
    super(props)

  }
  render() {
    console.log('props', this.props)
    return (
      <div className={container}>
        <Navigation isAuthed={this.props.isAuthed}/> 
        <div className={innerContainer}>
          {this.props.children}
        </div>
      </div>
     
      
    )
  }
}



export default withRouter(connect(
  (state) => ({isAuthed: state.isAuthed})
)(MainContainer))