/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {

// To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.biante_hero_banner = {
    attach: function(context, settings) {
      // Hero banner block.
      var owl = $('#hero-banner-carousel', context);

      owl.owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
      });
      // Hero banner previous button.
      $('.banner-prev', context).click(function(e){
        e.preventDefault();
        owl.trigger('owl.prev');
      });
      // Hero banner next button.
      $('.banner-next', context).click(function(e){
        e.preventDefault();
        owl.trigger('owl.next');
      });

    }
  };

})(jQuery, Drupal, this, this.document);