import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';

class Heart extends Component {
  render() {
    return(
      <div className="like is-liked" style={this.props.style}></div>
    )
  }
}

export default Heart;