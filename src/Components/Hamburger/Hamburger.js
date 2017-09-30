
/* React */
import React from 'react';

/* Components */
import Nav from '../Nav/Nav';
import { Icon } from 'react-foundation';

class Hamburger extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  closeMenu() {
    this.setState({ isOpen: false })
  }

  renderHambugerButton() {
    if (!this.state.isOpen) {
      return (
        <div className="bm-burger-button">
          <button onClick={this.toggleMenu}>
            <Icon name="fi-list"/>
          </button>
        </div>
      )
    }
    return (
      <div className="bm-burger-button">
        <button onClick={this.toggleMenu}>
          <Icon name="fi-x"/>
        </button>
      </div>
    )
  }

  render() {
    let { nav_items } = this.props

    let active = this.state.isOpen ? 'active' : '';

    return (
      <div className={"hamburger "+active}>
        <div className="bm-overlay"/>
        <div className="bm-menu-wrap">
          <div className="bm-menu" onClick={this.closeMenu}>
             <nav className="bm-item-list">
                <Nav items={nav_items}/>
             </nav> 
          </div> 
        </div>
        { this.renderHambugerButton() }       
      </div>
    );
  }
}

Hamburger.propTypes = {
  nav_items: React.PropTypes.array
}

Hamburger.defaultProps = {
  nav_items: []
}

export default Hamburger;
