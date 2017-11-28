import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { DuckDetails } from 'components'
import { bindActionCreators } from 'redux'
import * as ducksActionCreators from 'redux/modules/ducks'
import * as likeCountActionCreators from 'redux/modules/likeCount'
import * as repliesActionCreators from 'redux/modules/replies'

class DuckDetailsContainer extends Component {
  componentDidMount () {
    this.props.initLikeFetch(this.props.duckId)
    if (this.props.duckAlreadyFetched === false) {
      this.props.fetchAndHandleDucks(this.props.duckId)
    } else {
      this.props.removeFetching()
    }
  }


  render() {
    return (
        
        <DuckDetails
          addAndHandleReply={this.props.addAndHandleReply}
          authedUser={this.props.authedUser} 
          duckId={this.props.duckId} 
          isFetching={this.props.isFetching}
          error={this.props.error} 
         />

    );
  }
}

DuckDetailsContainer.propTypes = {
  authedUser: PropTypes.object.isRequired,
  duckId: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  duckAlreadyFetched: PropTypes.bool.isRequired,
  removeFetching: PropTypes.func.isRequired,
  fetchAndHandleDucks: PropTypes.func.isRequired,
};

function mapStatToProps ({ducks, likeCount, users}, props) {
  console.log(props)
  return {
    isFetching: ducks.isFetching || likeCount.isFetching, //false
    error: ducks.error,
    authedUser: users[users.authedId].info,
    duckId: props.match.params.duckId,
    duckAlreadyFetched: !!ducks[props.match.params.duckId]
  }
}

function mapDispatchToProps (dispatch)  {
 return bindActionCreators({
   ...ducksActionCreators,
   ...likeCountActionCreators,
   ...repliesActionCreators
    }, dispatch)
}

export default connect(
  mapStatToProps,
  mapDispatchToProps,
 )(DuckDetailsContainer)