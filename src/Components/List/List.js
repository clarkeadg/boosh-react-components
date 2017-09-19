
/* React */
import React from 'react'

/* Components */
import ProjectBox from '../ProjectBox/ProjectBox'
import ItemBox from '../ItemBox/ItemBox'

class List extends React.Component {

  renderItem(id, item, itemType) {
    switch(itemType) {
      case "ProjectBox":
        return (
          <ProjectBox key={id} {...item} />
        )
      break;
      case "ItemBox":
        return (
          <ItemBox key={id} {...item} />
        )
      break;
      default:
        return (
          <div className="item">
            <h4>{item.title}</h4>
          </div>
        )
      break;
    }
  }

  render() {
    if (!this.props.itemType) return false;

    return (
      <div className="list">
        {this.props.data.map((item,id) => {
          return this.renderItem(id, item, this.props.itemType)
        })}
      </div>
    );
  }
}

export default List;
