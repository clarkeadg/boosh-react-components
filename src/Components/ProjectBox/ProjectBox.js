
/* React */
import React from 'react';

/* Components */

class ProjectBox extends React.Component {

  render() {
    return (
      <div className="projectbox itembox">
        <img src={this.props.img}/>
        <div className="itembox-title" dangerouslySetInnerHTML={{ __html: this.props.title }}/>
        <div className="projectbox-company" dangerouslySetInnerHTML={{ __html: this.props.company }}/>
        <div className="projectbox-role" dangerouslySetInnerHTML={{ __html: this.props.role }}/>
      </div>
    );
  }

}

export default ProjectBox;
