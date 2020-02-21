import setTouchClassName from './components/setTouchClassName';
import lazyLoading from './components/lazyLoading';
import setTabs from './components/setTabs';
import setSelects from './components/setSelects';
import setScrollbar from './components/setScrollbar';
import fixHeroSearch from './components/fixHeroSearch';
import toggleMenu from './components/toggleMenu';
// import setSearchPanelHeight from './components/setSearchPanelHeight';
import setGallery from './components/setGallery';
import { setBlockBgHeight } from './components/setBlockBgHeight';
import setAccordion from './components/setAccordion';
import toggleComponentsList from './components/toggleComponentsList';
import showPassword from './components/showPassword';
import truncateText from './components/truncateText';
import setSearchToggle from './components/setSearchToggle';
import toggleHeroSearch from './components/toggleHeroSearch';
import scrollTo from './components/scrollTo';
import setCabinetNav from './components/setCabinetNav';
import initStickyPolyfill from './components/initStickyPolyfill';
import scaleImg from './components/scaleImg';
import setModelGallery from './components/setModelGallery';
import setGrid from './components/setGrid';

import setPopups from './components/setPopups';

import './lib/js-cloudimage-360-view';



// import setStickyPanels from './components/setStickyPanels';

$(function() {
  setTouchClassName();
  lazyLoading();
  setTabs();
  setSelects();
  setScrollbar();
  fixHeroSearch();
  toggleMenu();
  // setSearchPanelHeight();
  setGallery();
  setBlockBgHeight();
  setAccordion();
  toggleComponentsList();
  showPassword();
  truncateText();
  setSearchToggle();
  toggleHeroSearch();
  scrollTo();
  initStickyPolyfill();
  setCabinetNav();
  setModelGallery();
  
  setPopups();

  setGrid();
});

window.onload = () => {
  setTimeout(() => {
    scaleImg();
  }, 1000);  
};


