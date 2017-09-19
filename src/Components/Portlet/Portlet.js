
/* React */
import React from 'react';

/* Components */

class Portlet extends React.Component {

  render() {
    let myClass = "portlet";
    if (this.props.className) {
      myClass+= " "+this.props.className;
    }
    if (this.props.cont) {
      return (
        <div className={myClass}>
          { this.props.title ? <div className="portlet-title" dangerouslySetInnerHTML={{ __html: this.props.title }}/> : '' }
          { this.props.subtitle ? <div className="portlet-subtitle" dangerouslySetInnerHTML={{ __html: this.props.subtitle }}/> : '' }
          <div className="portlet-cont" dangerouslySetInnerHTML={{ __html: this.props.cont }}/>
        </div>
      );
    }
    if (this.props.items) {
      return (
        <div className={myClass}>
          { this.props.title ? <div className="portlet-title" dangerouslySetInnerHTML={{ __html: this.props.title }}/> : '' }
          { this.props.subtitle ? <div className="portlet-subtitle" dangerouslySetInnerHTML={{ __html: this.props.subtitle }}/> : '' }
          <div className="portlet-items">{this.props.items}</div>
        </div>
      );
    }
    return (
      <div className={myClass}>
        { this.props.title ? <div className="portlet-title" dangerouslySetInnerHTML={{ __html: this.props.title }}/> : '' }
        { this.props.subtitle ? <div className="portlet-subtitle" dangerouslySetInnerHTML={{ __html: this.props.subtitle }}/> : '' }
        <div className="portlet-cont"/>
      </div>
    );
  }

}

export default Portlet;
