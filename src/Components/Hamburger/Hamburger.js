
/* React */
import React from 'react';

/* Components */
import BurgerMenu from 'react-burger-menu';
import Nav from '../Nav/Nav';

// Pick an Animation
//const HamburgerMenu = BurgerMenu.slide;
const HamburgerMenu = BurgerMenu.stack;
//const HamburgerMenu = BurgerMenu.elastic;
//const HamburgerMenu = BurgerMenu.bubble;
//const HamburgerMenu = BurgerMenu.push;
//const HamburgerMenu = BurgerMenu.pushRotate;
//const HamburgerMenu = BurgerMenu.scaleDown;
//const HamburgerMenu = BurgerMenu.scaleRotate;
//const HamburgerMenu = BurgerMenu.fallDown;

class Hamburger extends React.Component {

  render() {
    return (
      <div className="hamburger hide-for-large-x">
        <HamburgerMenu isOpen={false} pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
          <Nav items={this.props.nav_items}/>
        </HamburgerMenu>
      </div>
    );
  }
}

export default Hamburger;

