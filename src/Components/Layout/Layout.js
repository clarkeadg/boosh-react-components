
/* React */
import React from 'react';

/* Components */
import TopNav from '../TopNav/TopNav';
import Hamburger from '../Hamburger/Hamburger';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
//import { LightBox } from 'boosh-react-lightbox';

class Layout extends React.Component {

  render() {
    const { app,...rest } = this.props
    return (
      <div id="outer-container" className="layout">
        <Hamburger nav_items={app.nav}/>
        <div id="page-wrap">
          <div className="fixed-top">
            <TopNav/>
            <Header logo_url={app.logo} site_name={app.name} nav_items={app.nav}/>
          </div>
          <main {...rest}/>
          <Footer copyright={'Copyright 2017'} address={''}/>
        </div>
        { /* <LightBox/> */ }
      </div>
    );
  }
}

Layout.propTypes = {
  app: React.PropTypes.object
}

Layout.defaultProps = {
  app: {}
}

export default Layout;
