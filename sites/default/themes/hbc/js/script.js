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


  // Mobile menu functionality
  Drupal.behaviors.hbc_mobile_menu = {
    attach: function(context, settings) {

      var $menu = $('#block-menu-block-1', context); // Mobile menu block
      var $menu_btn = $('.block-title', $menu); // Title / toggle button
      var $menu_items = $('.menu-block-wrapper',$menu); // Menu item wrapper
      var $expanded = $('.menu-block-wrapper>.menu>.expanded>a',$menu); // Menu item



      $expanded.click(function(e){
        // If this menu item is not expanded.
        if(!$(this).hasClass('menu-item-open')){
          // Close any expanded menu items
          $('.menu-item-open').next('.menu').slideUp();
          // Remove class from closed menu items
          $expanded.removeClass('menu-item-open');
          // Stop default behaviour if item not expanded
          e.preventDefault();
          // Slide Menu item open and add class
          $(this).next('.menu').slideToggle();
          $(this).addClass('menu-item-open');
        }

      });

      // Menu button click.
      $menu_btn.click(function(){
        // Close all open menu items when closing menu
        $('.menu-item-open',context).next('.menu').slideUp();
        // Remove class on menu items after closing them
        $expanded.removeClass('menu-item-open');
        // Open and close menu
        $menu_items.stop(false,false).slideToggle();
        // Add or remove class on menu
        $menu.toggleClass('menu-open');
      });

    }
  };


})(jQuery, Drupal, this, this.document);
