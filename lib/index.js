'use strict';

var Ad = require('./Components/Ad/Ad');
var BlockGrid = require('./Components/BlockGrid/BlockGrid');
var Carousel = require('./Components/Carousel/Carousel');
var Checkbox = require('./Components/Checkbox/Checkbox');
//const Collection   = require('./Components/Collection/Collection');
//const DropDown   = require('./Components/DropDown/DropDown');
var Footer = require('./Components/Footer/Footer');
var Gallery = require('./Components/Gallery/Gallery');
var Hamburger = require('./Components/Hamburger/Hamburger');
var Header = require('./Components/Header/Header');
var ItemBox = require('./Components/ItemBox/ItemBox');
var Layout = require('./Components/Layout/Layout');
var Loading = require('./Components/Loading/Loading');
//const LightBox   = require('./Components/LightBox/LightBox');
var List = require('./Components/List/List');
var Nav = require('./Components/Nav/Nav');
var Pagination = require('./Components/Pagination/Pagination');
var Portlet = require('./Components/Portlet/Portlet');
var ProjectBox = require('./Components/ProjectBox/ProjectBox');
var TopNav = require('./Components/TopNav/TopNav');
var VideoBackground = require('./Components/VideoBackground/VideoBackground');

module.exports = {
  Ad: Ad.default,
  BlockGrid: BlockGrid.default,
  Carousel: Carousel.default,
  Checkbox: Checkbox.default,
  //Collection:   Collection.default,
  //DropDown:     DropDown.default,
  Footer: Footer.default,
  Gallery: Gallery.default,
  Hamburger: Hamburger.default,
  Header: Header.default,
  ItemBox: ItemBox.default,
  Layout: Layout.default,
  //LightBox:     LightBox.default,
  List: List.default,
  Loading: Loading.default,
  Nav: Nav.default,
  Pagination: Pagination.default,
  Portlet: Portlet.default,
  ProjectBox: ProjectBox.default,
  TopNav: TopNav.default,
  VideoBackground: VideoBackground.default
};