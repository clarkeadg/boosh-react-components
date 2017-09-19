
/* React */
import React from 'react'
import { connect } from 'react-redux'

/* Config */
//import Config from '../../config'

/* Actions */
//import { LightBoxActions } from 'boosh-react-lightbox'

/* Components */
import { Row, Column, Button } from 'react-foundation';
//import { Link } from 'react-router'

class Gallery extends React.Component {

  openLightbox(images, index) {
   //this.props.dispatch(LightBoxActions.lightboxOpen(images, index))
  };

  render() {
    if (!this.props.items) return false;

    let images = []

    const z = this

    return (
      <div className="gallery">
        <Row upOnSmall={7}>
          {this.props.items.map((item,id) => {
            images.push('http://localhost:8888'+item.imgfull)
            return (
              <Column key={id}>
                <button onClick={()=>z.openLightbox(images,id)}>
                  <img src={'http://localhost:8888'+item.thumb} />
                </button>
              </Column>
            )
          })}
        </Row>
      </div>
    );

  }

}

const mapStateToProps = (state, props) => {
  return {
  }
}

export default connect(mapStateToProps)(Gallery)
