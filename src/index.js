
const Ad         = require('./Components/Ad/Ad');
const BlockGrid  = require('./Components/BlockGrid/BlockGrid');
const Carousel   = require('./Components/Carousel/Carousel');
const Checkbox   = require('./Components/Checkbox/Checkbox');
//const Collection   = require('./Components/Collection/Collection');
//const DropDown   = require('./Components/DropDown/DropDown');
const Footer     = require('./Components/Footer/Footer');
const Gallery    = require('./Components/Gallery/Gallery');
const Hamburger  = require('./Components/Hamburger/Hamburger');
const Header     = require('./Components/Header/Header');
const ItemBox    = require('./Components/ItemBox/ItemBox');
const Layout     = require('./Components/Layout/Layout');
const Loading    = require('./Components/Loading/Loading');
//const LightBox   = require('./Components/LightBox/LightBox');
const List       = require('./Components/List/List');
const Nav        = require('./Components/Nav/Nav');
const Pagination = require('./Components/Pagination/Pagination');
const Portlet    = require('./Components/Portlet/Portlet');
const ProjectBox = require('./Components/ProjectBox/ProjectBox');
const TopNav     = require('./Components/TopNav/TopNav');
const VideoBackground = require('./Components/VideoBackground/VideoBackground');

module.exports = {
  Ad:           Ad.default,
  BlockGrid:    BlockGrid.default,
  Carousel:     Carousel.default,
  Checkbox:     Checkbox.default,
  //Collection:   Collection,
  //DropDown:     DropDown,
  Footer:       Footer.default,
  Gallery:      Gallery.default,
  Hamburger:    Hamburger.default,
  Header:       Header.default,
  ItemBox:      ItemBox.default,
  Layout:       Layout.default,
  //LightBox:     LightBox,
  List:         List.default,
  Loading:      Loading.default,
  Nav:          Nav.default,  
  Pagination:   Pagination.default,
  Portlet:      Portlet.default,
  ProjectBox:   ProjectBox.default,
  TopNav:       TopNav.default,
  VideoBackground: VideoBackground.default
}
