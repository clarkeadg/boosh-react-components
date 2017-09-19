
/* React */
import React from 'react'

/* Components */
import { Row, Column } from 'react-foundation';
import { Link } from 'react-router'

class BlockGrid extends React.Component {

  renderItem(id, item) {
    return (
      <Link to={item.url}>
        <h4>{item.title}</h4>
        <img src={item.img} />
        <h6>{item.desc}</h6>
      </Link>
    )
  }

  render() {

    return (
      <Row upOnSmall={2} upOnMedium={3} upOnLarge={5}>
        {this.props.data.map((item,id) => {
          return (
            <Column>
              {this.renderItem(id, item)}
            </Column>
          )
        })}
      </Row>
    );
  }
}

export default BlockGrid;
