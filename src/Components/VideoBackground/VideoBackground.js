
/* React */
import React from 'react'

/* Components */
import { Row, Column, Menu, MenuItem } from 'react-foundation'
//import { MeBox } from 'boosh-react-auth'
import { Link } from 'react-router'

const videos = [
  'dark-igloo-cat-1',
  'dark-igloo-giphy-cat',
  'dark-igloo-logo-explode',
  'mathewlucas',
  'peter-carlson-bots',
  'savage-street',
  'victorcourtright'
];

class VideoBackground extends React.Component {

  render() {

    let { video }  = this.props
    if (!video) video = "//cdn.boosh.io/videos/" + videos[Math.floor(Math.random()*videos.length)];

    return (
      <div className="video-background-wrapper">
        <video className="video-background" preload="auto" autoPlay="autoplay" loop="loop">
          <source src={video+".mp4"} type="video/mp4"/>
          <source src={video+".webm"} type="video/webm"/>
        </video>
      </div>
    );
  }

}

export default VideoBackground;
