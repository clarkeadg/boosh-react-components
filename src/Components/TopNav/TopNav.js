
/* React */
import React from 'react'

/* Components */
import { Row, Column, Menu, MenuItem } from 'react-foundation'
//import { MeBox } from 'boosh-react-auth'
import { Link } from 'react-router'

class TopNav extends React.Component {

  render() {
    //if (!this.props.items) return false;

    return (
      <div className="top-nav">
        <Row className="display">
          <Column small={1}>
            <Menu className="left">

            </Menu>
          </Column>
          <Column small={11}>
            { /* <MeBox/> */ }
          </Column>
        </Row>
      </div>
    );
  }

}

// <MenuItem><Link to='/'>Logo</Link></MenuItem>

export default TopNav;
