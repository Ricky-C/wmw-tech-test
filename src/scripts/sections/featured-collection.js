/**
 * Section: Featured collection
 * ------------------------------------------------------------------------------
 * Featured collection configuration for complete theme support
 * - https://github.com/Shopify/theme-scripts/tree/master/packages/theme-sections
 *
 * @namespace featuredCollection
 */
import {register} from '@shopify/theme-sections';

/**
 * Featured collection constructor
 * Executes on page load as well as Theme Editor `section:load` events.
 *
 * @param {string} container - selector for the section container DOM element
 */
register('featured-collection', {

  init() {
    window.console.log('Initialising featured collection section');

        if($(window).width() > 768){
          $('.featured-collection > .page-width > .grid').slick({
            mobileFirst: true,
          dots: true,
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
            variableWidth: false,
            arrows: true
        });
        } else if (($(window).width() <= 768) && ($(window).width() >= 415)){
          $('.featured-collection > .page-width > .grid').slick({
            mobileFirst: true,
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
            variableWidth: false,
            arrows: true
        });

        } else if ($(window).width() <= 414) {
          $('.featured-collection > .page-width > .grid').slick({
            mobileFirst: true,
          dots: true,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll:  1,
          infinite: true,
            variableWidth: false,
            arrows: true
        });
        $('.featured-collection > .page-width > .grid').slick('slickGoTo', -1);
        } else{

        }
  },

  publicMethod() {
    // Custom public section method
  },

  _privateMethod() {
    // Custom private section method
  },

  // Shortcut function called when a section is loaded via 'sections.load()' or by the Theme Editor 'shopify:section:load' event.
  onLoad() {
    // Do something when a section instance is loaded
    this.init();
  },

  // Shortcut function called when a section unloaded by the Theme Editor 'shopify:section:unload' event.
  onUnload() {
    // Do something when a section instance is unloaded
  },

  // Shortcut function called when a section is selected by the Theme Editor 'shopify:section:select' event.
  onSelect() {
    // Do something when a section instance is selected
  },

  // Shortcut function called when a section is deselected by the Theme Editor 'shopify:section:deselect' event.
  onDeselect() {
    // Do something when a section instance is selected
  },

  // Shortcut function called when a section block is selected by the Theme Editor 'shopify:block:select' event.
  onBlockSelect() {
    // Do something when a section block is selected
  },

  // Shortcut function called when a section block is deselected by the Theme Editor 'shopify:block:deselect' event.
  onBlockDeselect() {
    // Do something when a section block is deselected
  },
});
