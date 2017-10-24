
/* React */
import React from 'react';

/* Components */
import { Menu, MenuItem, Icon } from 'react-foundation';
import { Link, IndexLink } from 'react-router'
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown'

class Nav extends React.Component {

  renderItem(item) {
    if (item.type == "button") return this.renderButton(item);

    if (item.dropdown) {
       return (
        <Dropdown ref="dropdown" >
          <DropdownTrigger> 
            { item.icon ? <Icon name={item.icon}/> : '' }
            { item.title }   
          </DropdownTrigger>
          <DropdownContent onClick={()=>{this.refs.dropdown.hide()}}>
            <Menu isVertical>
              {item.dropdown.map((dropDownItem, id)=>{
                return (
                  <MenuItem key={id}><Link to={dropDownItem.url}>dropDownItem.title</Link></MenuItem>
                )
              })}
            </Menu>
          </DropdownContent>
        </Dropdown>
      )      
    }

    if (item.url == "/") {
      return (
        <IndexLink activeClassName={'active'} to={item.url}>
          { item.icon ? <Icon name={item.icon}/> : '' }
          { item.title }
        </IndexLink>
      )
    }

    return (
      <Link activeClassName={'active'} to={item.url}>
        { item.icon ? <Icon name={item.icon}/> : '' }
        { item.title }
      </Link>
    )
  }

  renderButton(item) {
    return (<a target="_blank" className="button" href={item.url}>{item.title}</a>)
  }

  render() {
    const z = this
    if (!z.props.items) return false;

    let isVertical = z.props.isVertical ? z.props.isVertical : false    

    return (
      <Menu className={z.props.className} isVertical={isVertical}>
        {z.props.items.map((item,id) => {
          return (
            <MenuItem key={id}>
              { z.renderItem(item) }
              { item.items ? <Menu className={'submenu'} isVertical={isVertical}>
                {item.items.map((it,id) => {
                  return (
                    <MenuItem key={id}>
                      <Link activeClassName={'active'} to={it.url}>
                        { it.icon ? <Icon name={it.icon}/> : '' }
                        {it.title}
                      </Link>
                    </MenuItem>
                  )
                })}
              </Menu> : '' }
            </MenuItem>
          )
        })}
      </Menu>
    );
  }

}

export default Nav;
