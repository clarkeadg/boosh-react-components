
/* React */
import React from 'react'

/* Components */
import Slider from 'react-slick'
import { Link } from 'react-router'

class Carousel extends React.Component {

  render() {
    let { slides, options } = this.props;
    if (!slides.length) return false;

    let settings = options ? options : {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 6000,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings}>{
        slides.map((slide,id) => {
          return <div key={id} className="carousel-card">
            <Link to={slide.url}>
              <div className="slide-cont">
                <img className="banner" src={slide.banner}/>
                { slide.pattern ? <div className="pattern-map"/> : ''}
                { slide.title ? <h2>{slide.title}</h2> : ''}
              </div>
            </Link>
          </div>
        })
      }</Slider>
    );
  }

}

Carousel.propTypes = {
  slides: React.PropTypes.array
}

Carousel.defaultProps = {
  slides: []
}

export default Carousel


