import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Duck } from 'components'
import * as usersLikesActions from 'redux/modules/usersLikes'


class DuckContainer extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.goToProfile = this.goToProfile.bind(this)
  }
  goToProfile (e) {
    e.stopPropagation()
    this.context.router.history.push('/' + this.props.duck.uid)
    //this.context.router.history.replace('feed')
  } 
  handleClick (e) {
    e.stopPropagation()
    // this.context.router.history.push('/duckDetail/:duckId')
    this.context.router.history.push(`/duckDetail/${this.props.duck.duckId}`)
    // this.context.router.history.push('/duckDetail' + this.props.duck.duckId)
  }
  render() {
    console.log(this)
    return (
      
        <Duck 
        goToProfile={this.goToProfile}
        onClick={this.handleClick}
        {...this.props} />
     
    );
  }
}
DuckContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

DuckContainer.defaultProps = {
  hideReplybtn: false,
  hideLikeCount: true,
}
function mapStateToProps ({ducks, likeCount, usersLikes}, props) {
  return {
    duck: ducks[props.duckId],
    hideLikeCount: props.hideLikeCount,
    hideReplybtn: props.hideReplybtn,
    isLiked: usersLikes[props.duckId] === true,
    numberOfLikes: likeCount[props.duckId]
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(usersLikesActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DuckContainer);