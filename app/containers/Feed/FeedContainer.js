import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Feed } from 'components'
import * as feedActionCreators from 'redux/modules/feed'

class FeedContainer extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount () {
    this.props.setAndHandleFeedListener()
    console.log(this)
  }

  render() {
    return (
      <Feed 
        newDucksAvailable={this.props.newDucksAvailable}
        error={this.props.error}
        isFetching={this.props.isFetching}
        resetNewDucksAvailable={this.props.resetNewDucksAvailable}
        duckIds={this.props.duckIds} />
    );
  }
}

FeedContainer.propTypes = {
  newDucksAvailable: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
};


function mapStateToProps ({feed}) {
 const { newDucksAvailable, error, isFetching, duckIds } = feed
  return {
    newDucksAvailable,
    error,
    isFetching,
    duckIds,
    
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(feedActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedContainer)
//export default FeedContainer;