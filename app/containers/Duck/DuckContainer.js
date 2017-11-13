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
  }
  goToProfile (e) {
    e.stopPropagation()
    this.context.router.push('/' + this.props.duck.uid)
  }
  handleClick (e) {
    e.stopPropagation()
    this.context.router.push('/duckDetail' + this.props.duck.duckId)
  }
  render() {
    return (
      <div>
        <Duck 
        goToProfile={this.goToProfile}
        onClick={this.props.hideReplybtn === true ? null : this.handleClick}
        {...this.props} />
      </div>
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