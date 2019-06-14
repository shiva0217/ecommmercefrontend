import React, { Component } from 'react';
class Like extends Component {
    render() {
      let classes = "fa fa-heart";
      if (!this.props.liked) classes += "-o";
      return (
        <i
          className={classes}
          style={{ cursor: "pointer" }}
          onClick={this.props.onClick}
          aria-hidden="true"
        />
      );
    }
  }
  
  export default Like;