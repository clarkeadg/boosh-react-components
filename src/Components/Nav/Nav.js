
/* React */
import React from 'react';

/* Components */
import { Menu, MenuItem, Icon } from 'react-foundation';
import { Link, IndexLink } from 'react-router'

class Nav extends React.Component {

  renderLink(item) {
    if (item.type == "button") return this.renderButton(item);

    if (item.url == "/") {
      return (
        <IndexLink activeClassName={'active'} to={item.url}>
          { item.icon ? <Icon name={item.icon}/> : '' }
          {item.title}
        </IndexLink>
      )
    }

    return (
      <Link activeClassName={'active'} to={item.url}>
        { item.icon ? <Icon name={item.icon}/> : '' }
        {item.title}
      </Link>
    )
  }

  renderButton(item) {
    return (<a target="_blank" className="button" href={item.url}>{item.title}</a>)
  }

  render() {
    if (!this.props.items) return false;

    let isVertical = this.props.isVertical ? this.props.isVertical : false
    const z = this

    return (
      <Menu className={this.props.className} isVertical={isVertical}>
        {this.props.items.map((item,id) => {
          return (
            <MenuItem key={id}>
              { z.renderLink(item) }
            </MenuItem>
          )
        })}
      </Menu>
    );
  }

}

export default Nav;
