
/* React */
import React from 'react'

/* Components */
import { Row, Column } from 'react-foundation';
import { Link } from 'react-router'

class Ad extends React.Component {

  render() {

    let imgSource = this.props.imgSource;
    if (!imgSource) return false;

    return (
      <div className="ad">
        <a href="#"><img src={imgSource}/></a>
      </div>
    );
  }
}

export default Ad;
