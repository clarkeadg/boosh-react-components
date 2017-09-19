
/* React */
import React from 'react';

/* Components */
//import User from '../../Components/User'

class ExampleComponent extends React.Component {

  render() {

    let { data } = this.props;

    return (
      <div className={'ExampleComponent'} >

      </div>
    );
  }

}

ExampleComponent.propTypes = {
  //me: React.PropTypes.object
}

ExampleComponent.defaultProps = {
  //me: {}
}

export default ExampleComponent

