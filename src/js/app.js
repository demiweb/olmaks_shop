import setTouchClassName from './components/setTouchClassName';
import lazyLoading from './components/lazyLoading';
import setTabs from './components/setTabs';
import setSelects from './components/setSelects';
import setScrollbar from './components/setScrollbar';
import fixHeroSearch from './components/fixHeroSearch';
import toggleMenu from './components/toggleMenu';
import setSearchPanelHeight from './components/setSearchPanelHeight';
// import setGallery from './components/setGallery';

$(function() {
  setTouchClassName();
  lazyLoading();
  setTabs();
  setSelects();
  setScrollbar();
  fixHeroSearch();
  toggleMenu();
  setSearchPanelHeight();
  // setGallery();
});

window.jQuery = jQuery;
window.$ = $;
