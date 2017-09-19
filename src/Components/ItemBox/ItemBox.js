
/* React */
import React from 'react';

/* Components */

class ItemBox extends React.Component {

  render() {
    return (
      <div className="itembox">
        <img src={this.props.img}/>
        <div className="itembox-title" dangerouslySetInnerHTML={{ __html: this.props.title }}/>
        <div className="itembox-copy" dangerouslySetInnerHTML={{ __html: this.props.copy }}/>
      </div>
    );
  }

}

export default ItemBox;
