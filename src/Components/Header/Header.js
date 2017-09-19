
/* React */
import React from 'react';

/* Components */
import { Row, Column } from 'react-foundation'
import Nav from '../Nav/Nav';
import { Link } from 'react-router'

class Header extends React.Component {

  render() {
    return (
      <header>
        <Row className="display">
          <Column small={12}>
            <Link className="logo" to="/">
              <img src={this.props.logo_url} alt={this.props.site_name}/>
            </Link>
            <div className="header-nav show-for-large">
              <Nav items={this.props.nav_items}/>
            </div>
          </Column>
        </Row>
      </header>
    );
  }

}

export default Header;
