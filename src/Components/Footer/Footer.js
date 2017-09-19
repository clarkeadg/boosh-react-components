
/* React */
import React from 'react';

/* Components */
import { Row, Column, Menu, MenuItem, Alignments } from 'react-foundation';
import { Link } from 'react-router'

class Footer extends React.Component {

  render() {
    return (
      <footer>
        <Row className="display">
          <Column small={12}>
            <Link to={'/pages/safety'}>Safety</Link>
            {' | '}
            <Link to={'/pages/terms'}>Terms of Service</Link>
            {' | '}
            <Link to={'/pages/privacy'}>Privacy Policy</Link>            
            <div className="copyright">{this.props.copyright}</div>
            <div className="address">{this.props.address}</div>
          </Column>
        </Row>
      </footer>
    );
  }
}

/*
<footer>
  <Row className="display">
    <Column small={12} medium={6}>
      <Menu isVertical>
        <MenuItem><Link to={'/music'}>Music Videos</Link></MenuItem>
        <MenuItem><Link to={'/game/sonic'}>Sonic the Hedgehog</Link></MenuItem>
      </Menu>
    </Column>
    <Column small={12} medium={6}>
      <Menu isVertical >
        <MenuItem><Link to={'/settings'}>Account</Link></MenuItem>
      </Menu>
    </Column>
  </Row>
  <Row className="display">
    <Column small={12}>
      <Link to={'/privacy'}>Privacy Policy</Link>
      {' | '}
      <Link to={'/terms'}>Terms of Service</Link>
      <div className="copyright">{this.props.copyright}</div>
      <div className="address">{this.props.address}</div>
    </Column>
  </Row>
</footer>
*/

export default Footer;
